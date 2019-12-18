import { gql } from 'apollo-server-express';

const auth = gql`
  extend type Query {
    me: User
  }

  extend type Mutation {
    register(credentials: CredentialsInput!, personalInfo: PersonalInfoInput!): RegisterMutationResponse
    login(credentials: CredentialsInput!): LoginMutationResponse
    invalidateTokens: Boolean
  }

  type LoginMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    token: String
  }

  type RegisterMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  input CredentialsInput {
    email: String!
    password: String!
  }

  input PersonalInfoInput {
    firstName: String
    lastName: String
    username: String
  }
`;

export default auth;
