import * as bcrypt from 'bcryptjs';
import * as yup from 'yup';

import User from '../../../entity/User';
import formatYupError from '../../../utils/formatYupError';
import MutationResponse from '../../../types/mutationResponse';
import { createTokens } from '../../../auth';
import { MutationLoginArgs, MutationRegisterArgs } from '../../graphql';

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
): Promise<MutationResponse[]> => {
  const { email, password } = credentials;
  const { firstName, lastName, username } = personalInfo;
  const yupErrors: MutationResponse[] = [];

  try {
    await registerCredentialsSchema.validate(credentials, { abortEarly: false });
  } catch (errors) {
    yupErrors.push(...formatYupError(errors));
  }

  try {
    await registerPersonalInfoSchema.validate(personalInfo, { abortEarly: false });
  } catch (errors) {
    yupErrors.push(...formatYupError(errors));
  }

  if (yupErrors.length > 0) {
    return yupErrors;
  }

  const errors: MutationResponse[] = [];

  const emailAlreadyExists = await User.findOne({
    where: { email },
    select: ['id'],
  });

  if (emailAlreadyExists) {
    errors.push({
      code: '400',
      message: 'email is already taken',
      success: false,
    });
  }

  const usernameAlreadyExists = await User.findOne({
    where: { username },
    select: ['id'],
  });

  if (usernameAlreadyExists) {
    errors.push({
      code: '400',
      message: 'username is already taken',
      success: false,
    });
  }

  if (errors.length > 0) {
    return errors;
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

  return [
    {
      code: '200',
      message: 'successfully registered',
      success: true,
    },
  ];
};

export const login = async (_: any, { credentials }: MutationLoginArgs, { res }: any): Promise<MutationResponse> => {
  const { email, password } = credentials;

  const user = await User.findOne({ where: { email } });

  const errorResponse: MutationResponse = {
    code: '400',
    message: 'invalid email or password',
    success: false,
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
    };
  }

  const { refreshToken, accessToken } = createTokens(user);

  res.cookie('refresh-token', refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 7 });
  res.cookie('access-token', accessToken, { maxAge: 1000 * 60 * 15 });

  return {
    code: '200',
    message: 'successfully logged in',
    success: true,
  };
};

// TODO create another for Admin, invalid Tokens for other Users
export const invalidateTokens = async (_: any, __: any, { req }: any): Promise<boolean> => {
  if (!req.userId) {
    return false;
  }

  const user = await User.findOne(req.userId);
  if (!user) {
    return false;
  }

  user.count += 1;
  await user.save();

  return true;
};
