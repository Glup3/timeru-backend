import { sign } from 'jsonwebtoken';
import User from './entity/User';

export const createTokens = (user: User): { refreshToken: string; accessToken: string } => {
  const refreshToken = sign({ userId: user.id, count: user.count }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '7d',
  });
  const accessToken = sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '15min',
  });

  return { refreshToken, accessToken };
};

export const authenticated = (next: any): any => (root: any, args: any, context: any, info: any): any => {
  if (!context.req.userId) {
    throw new Error('Unauthenticated!');
  }

  return next(root, args, context, info);
};
