import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
    me: User
    ping: String
    currentTime: String
  }

  type User {
    username: String
    firstName: String
    lastName: String
    email: String
  }

  type Category {
    id: ID
    title: String
    icon: String
    valuable: Boolean
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type AddCategoryMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    category: Category
  }

  type RemoveCategoryMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    category: Category
  }

  type UpdateCategoryMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    category: Category
  }

  input CategoryInput {
    title: String
    icon: String
    valuable: Boolean
  }

  type Error {
    path: String!
    message: String!
  }

  type Mutation {
    register(email: String!, password: String!, firstName: String!, lastName: String!, username: String!): [Error!]
    login(email: String!, password: String!): [Error!]
    invalidateTokens: Boolean
    addCategory(category: CategoryInput): AddCategoryMutationResponse
    removeCategory(id: ID!): RemoveCategoryMutationResponse
    updateCategory(id: ID!, category: CategoryInput): UpdateCategoryMutationResponse
  }
`;

export default typeDefs;
