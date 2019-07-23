import * as bcrypt from 'bcryptjs';
import * as yup from 'yup';

import User from '../../../entity/User';
import ErrorType from '../../../types/error';
import formatYupError from '../../../utils/formatYupError';
import MutationResponse from '../../../types/mutationResponse';
import { createTokens } from '../../../auth';
import { MutationLoginArgs, MutationRegisterArgs } from '../../graphql';

const registerSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string()
    .min(6)
    .max(255),
  firstName: yup.string(),
  lastName: yup.string(),
  username: yup.string().min(3),
});

export const register = async (_: any, args: MutationRegisterArgs): Promise<ErrorType[]> => {
  try {
    await registerSchema.validate(args, { abortEarly: false });
  } catch (error) {
    return formatYupError(error);
  }

  const { email, password, firstName, lastName, username } = args;

  const emailAlreadyExists = await User.findOne({
    where: { email },
    select: ['id'],
  });

  if (emailAlreadyExists) {
    return [
      {
        path: 'email',
        message: 'already taken',
      },
    ];
  }

  const usernameAlreadyExists = await User.findOne({
    where: { username },
    select: ['id'],
  });

  if (usernameAlreadyExists) {
    return [
      {
        path: 'username',
        message: 'already taken',
      },
    ];
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

  return null;
};

export const login = async (
  _: any,
  { email, password }: MutationLoginArgs,
  { res }: any
): Promise<MutationResponse> => {
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
