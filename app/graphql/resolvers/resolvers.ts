import { getAllCategories, getCategory } from './query/category';
import { getAllPermissions, getPermission } from './query/permission';

import { me } from './mutation/user';
import { addCategory, removeCategory, updateCategory } from './mutation/category';
import { addPermission, updatePermission, removePermission } from './mutation/permission';
import { register, login, invalidateTokens } from './mutation/authentication';

const resolvers = {
  Query: {
    me,
    getAllCategories,
    getCategory,
    getAllPermissions,
    getPermission,
  },
  Mutation: {
    register,
    login,
    invalidateTokens,
    addCategory,
    removeCategory,
    updateCategory,
    addPermission,
    updatePermission,
    removePermission,
  },
  MutationResponse: {
    __resolveType(): any {
      return null;
    },
  },
};

export default resolvers;
