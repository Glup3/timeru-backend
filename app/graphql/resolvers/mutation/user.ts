import User from '../../../entity/User';
import { authenticated } from '../../../auth';

export const me = authenticated(async (_: any, __: any, { req }: any): Promise<User> => User.findOne(req.userId));

export const temp = () => {};
