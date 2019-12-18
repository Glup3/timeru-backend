import * as bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

import User from '../../db/models/User.model';
import { registerCredentialsSchema, registerPersonalInfoSchema } from '../validation/validationSchemas';
import { MutationLoginArgs, MutationRegisterArgs } from '../../generated/graphql';

interface LoginMutationResponse extends MutationResponse {
  token: string;
}

export const register = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _: any,
  { credentials, personalInfo }: MutationRegisterArgs
): Promise<MutationResponse> => {
  const { email, password } = credentials;
  const { firstName, lastName, username } = personalInfo;

  try {
    await registerCredentialsSchema.validate(credentials, { abortEarly: false });
  } catch (errors) {
    return {
      code: '400',
      success: false,
      message: errors.inner[0].message,
    };
  }

  try {
    await registerPersonalInfoSchema.validate(personalInfo, { abortEarly: false });
  } catch (errors) {
    return {
      code: '400',
      success: false,
      message: errors.inner[0].message,
    };
  }

  const emailAlreadyExists = await User.findOne({
    where: { email },
    select: ['id'],
  });

  if (emailAlreadyExists) {
    return {
      code: '400',
      success: false,
      message: 'email is already taken',
    };
  }

  const usernameAlreadyExists = await User.findOne({
    where: { username },
    select: ['id'],
  });

  if (usernameAlreadyExists) {
    return {
      code: '400',
      success: false,
      message: 'username is already taken',
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    username,
  });

  await user.save();

  return {
    code: '200',
    message: 'successfully registered',
    success: true,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = async (_: any, { credentials }: MutationLoginArgs): Promise<LoginMutationResponse> => {
  const { email, password } = credentials;

  const user = await User.findOne({ where: { email } });

  const errorResponse: LoginMutationResponse = {
    code: '400',
    message: 'invalid email or password',
    success: false,
    token: null,
  };

  if (!user) {
    return errorResponse;
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return errorResponse;
  }

  if (!user.active) {
    return {
      code: '400',
      success: false,
      message: 'user account disabled',
      token: null,
    };
  }

  return {
    code: '200',
    message: 'successfully logged in',
    success: true,
    token: jsonwebtoken.sign({ id: user.id, count: user.count, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    }),
  };
};
