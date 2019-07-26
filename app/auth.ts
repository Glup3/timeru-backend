import { sign } from 'jsonwebtoken';
import User from './entity/User';
import { ROLE_ADMIN } from './constants';

export const createTokens = (user: User): { refreshToken: string; accessToken: string } => {
  const refreshToken = sign({ userId: user.id, role: user.role, count: user.count }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '7d',
  });
  const accessToken = sign({ userId: user.id, role: user.role }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '15min',
  });

  return { refreshToken, accessToken };
};

export const authenticated = (next: any): any => (root: any, args: any, context: any, info: any): any => {
  if (!context.req.user.id) {
    throw new Error('Unauthenticated!');
  }

  return next(root, args, context, info);
};

export const validateRole = (role: string): any => (next: any): any => (
  root: any,
  args: any,
  context: any,
  info: any
): any => {
  if (context.req.user.role !== role && context.req.user.role !== ROLE_ADMIN) {
    throw new Error('Unauthorized!');
  }

  return next(root, args, context, info);
};
