import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

import { categories, category, addCategory, removeCategory, updateCategory } from './categories/resolvers';
import { me, updateUser } from './users/resolvers';
import { addPermission, updatePermission, removePermission, permission, permissions } from './permissions/resolvers';
import { addProject, updateProject, removeProject, project, projects } from './projects/resolvers';
import { register, login } from './auth/resolvers';
import { addUserPermission } from './userPermissions/resolvers';
import { startTimer, stopTimer, timeEntries, isTimerRunning } from './timeEntries/resolvers';

const resolvers = {
  Query: {
    me,
    categories,
    category,
    permissions,
    permission,
    projects,
    project,
    timeEntries,
    isTimerRunning,
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
