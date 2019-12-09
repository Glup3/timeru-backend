import { gql } from 'apollo-server-express';

const user = gql`
  type User {
    username: String
    firstName: String
    lastName: String
    email: String
    role: String
    active: Boolean
  }

  extend type Mutation {
    updateUser(id: ID!, user: UserInput!): UpdateUserMutationResponse
  }

  type UpdateUserMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  input UserInput {
    firstName: String
    lastName: String
    active: Boolean
    role: String
  }
`;

export default user;
