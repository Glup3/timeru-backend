import User from '../../entity/User';
import { authenticated, validateRole } from '../../auth';
import { ROLE_USER, ROLE_ADMIN } from '../../constants';

import { addCategory, removeCategory, updateCategory } from './mutation/category';
import { register, login, invalidateTokens } from './mutation/authentication';

const resolvers = {
  Query: {
    hello: (): string => 'Hello World!',
    currentTime: authenticated(validateRole(ROLE_USER)((): string => new Date().toUTCString())),
    ping: authenticated(validateRole(ROLE_ADMIN)((): string => 'Pong')),
    me: authenticated(async (_: any, __: any, { req }: any): Promise<User> => User.findOne(req.userId)),
  },
  Mutation: {
    register,
    login,
    invalidateTokens,
    addCategory,
    removeCategory,
    updateCategory,
  },
  MutationResponse: {
    __resolveType(): any {
      return null;
    },
  },
};

export default resolvers;
