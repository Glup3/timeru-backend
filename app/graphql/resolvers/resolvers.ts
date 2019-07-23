import User from '../../entity/User';
import { authenticated } from '../../auth';

import { addCategory, removeCategory, updateCategory } from './mutation/category';
import { getAllCategories, getCategory } from './query/category';
import { register, login, invalidateTokens } from './mutation/authentication';

const resolvers = {
  Query: {
    me: authenticated(async (_: any, __: any, { req }: any): Promise<User> => User.findOne(req.userId)),
    getAllCategories,
    getCategory,
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
