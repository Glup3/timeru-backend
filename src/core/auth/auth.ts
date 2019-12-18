import { sign } from 'jsonwebtoken';
import User from '../../db/models/User.model';
import { ROLE_ADMIN } from '../../constants';

export const createTokens = (user: User): { refreshToken: string; accessToken: string } => {
  const refreshToken = sign({ userId: user.id, role: user.role, count: user.count }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '7d',
  });
  const accessToken = sign({ userId: user.id, role: user.role }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '15min',
  });

  return { refreshToken, accessToken };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authenticated = (next: any) => (root: any, args: any, context: any, info: any) => {
  if (!context.req.user || !context.req.user.id) {
    throw new Error('Unauthenticated!');
  }

  return next(root, args, context, info);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateRole = (role: string) => (next: any) => (root: any, args: any, context: any, info: any) => {
  if (context.req.user.role !== role && context.req.user.role !== ROLE_ADMIN) {
    throw new Error('Unauthorized!');
  }

  return next(root, args, context, info);
};
