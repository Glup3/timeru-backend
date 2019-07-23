import { gql } from 'apollo-server-express';

const permission = gql`
  type Permission {
    id: ID!
    title: String
  }

  extend type Mutation {
    addPermission(permission: PermissionInput!): AddPermissionMutationResponse
  }

  type AddPermissionMutationResponse implements MutationResponse {
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
