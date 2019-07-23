import { getAllCategories, getCategory } from './query/category';

import { me } from './mutation/user';
import { addCategory, removeCategory, updateCategory } from './mutation/category';
import { register, login, invalidateTokens } from './mutation/authentication';

const resolvers = {
  Query: {
    me,
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
