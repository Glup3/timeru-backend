import resolvers from './resolvers';
import root from './typeDefs';
import auth from './auth/typeDefs';
import category from './categories/typeDef';
import user from './users/typeDef';
import permission from './permissions/typeDef';
import project from './projects/typeDef';
import userPermission from './userPermissions/typeDef';
import timeEntry from './timeEntries/typeDef';

const typeDefs = [auth, category, root, user, permission, project, userPermission, timeEntry];

export { typeDefs, resolvers };
