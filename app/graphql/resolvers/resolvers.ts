import { categories, category } from './query/category';
import { permissions, permission } from './query/permission';

import { me, updateUser } from './mutation/user';
import { addCategory, removeCategory, updateCategory } from './mutation/category';
import { addPermission, updatePermission, removePermission } from './mutation/permission';
import { register, login, invalidateTokens } from './mutation/authentication';

const resolvers = {
  Query: {
    me,
    categories,
    category,
    permissions,
    permission,
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
    updateUser,
  },
  MutationResponse: {
    __resolveType(): any {
      return null;
    },
  },
};

export default resolvers;
