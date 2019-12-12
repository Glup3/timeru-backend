import * as bcrypt from 'bcryptjs';
import * as yup from 'yup';
import jsonwebtoken from 'jsonwebtoken';

import User from '../../../entity/User';
import { MutationLoginArgs, MutationRegisterArgs } from '../../graphql';

interface LoginMutationResponse extends MutationResponse {
  token: string;
}

const registerPersonalInfoSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup
    .string()
    .required()
    .min(3),
});

const registerCredentialsSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(6)
    .max(255),
});

export const register = async (
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
