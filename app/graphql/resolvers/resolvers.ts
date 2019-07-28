import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

import { categories, category } from './query/category';
import { permissions, permission } from './query/permission';
import { projects, project } from './query/project';

import { me, updateUser } from './mutation/user';
import { addCategory, removeCategory, updateCategory } from './mutation/category';
import { addPermission, updatePermission, removePermission } from './mutation/permission';
import { addProject, updateProject, removeProject } from './mutation/project';
import { register, login } from './mutation/authentication';
import { addUserPermission } from './mutation/userPermission';
import { startTimer, stopTimer } from './mutation/timeEntry';

const resolvers = {
  Query: {
    me,
    categories,
    category,
    permissions,
    permission,
    projects,
    project,
  },
  Mutation: {
    register,
    login,
    addCategory,
    removeCategory,
    updateCategory,
    addPermission,
    updatePermission,
    removePermission,
    updateUser,
    addProject,
    addUserPermission,
    updateProject,
    removeProject,
    startTimer,
    stopTimer,
  },
  MutationResponse: {
    __resolveType(): any {
      return null;
    },
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value: string) {
      return new Date(value);
    },
    serialize(value: Date) {
      return value.toUTCString();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
};

export default resolvers;
