import { gql } from 'apollo-server-express';

const permission = gql`
  type Permission {
    id: ID
    title: String
  }

  extend type Query {
    permissions: [Permission]
    permission(id: ID, title: String): Permission
  }

  extend type Mutation {
    addPermission(permission: PermissionInput!): AddPermissionMutationResponse
    updatePermission(id: ID!, permission: PermissionInput!): UpdatePermissionMutationResponse
    removePermission(id: ID!): RemovePermissionMutationResponse
  }

  type AddPermissionMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    permission: Permission
  }

  type UpdatePermissionMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    permission: Permission
  }

  type RemovePermissionMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    permission: Permission
  }

  input PermissionInput {
    title: String
  }
`;

export default permission;
