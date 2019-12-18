import { gql } from 'apollo-server-express';

const userPermission = gql`
  type UserPermission {
    id: ID
    user: User
    project: Project
    permission: Permission
  }

  extend type Mutation {
    addUserPermission(userPermissionInput: UserPermissionInput!): AddUserPermissionMutationResponse
  }

  type AddUserPermissionMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    userPermission: UserPermission
  }

  input UserPermissionInput {
    userId: ID
    username: String
    projectId: ID
    projectCodename: String
    permissionId: ID
    permissionTitle: String
  }
`;

export default userPermission;
