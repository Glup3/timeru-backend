import { sign } from 'jsonwebtoken';
import User from './entity/User';

const createTokens = (user: User): { refreshToken: string; accessToken: string } => {
  const refreshToken = sign({ userId: user.id, count: user.count }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '7d',
  });
  const accessToken = sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '15min',
  });

  return { refreshToken, accessToken };
};

export default createTokens;
