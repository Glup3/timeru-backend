import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
    me: User
    ping: String
    currentTime: String
    getAllCategories: [Category]
    getCategory(id: ID): Category
  }

  type Mutation {
    register(credentials: CredentialsInput!, personalInfo: PersonalInfoInput!): [RegisterMutationResponse]
    login(credentials: CredentialsInput!): LoginMutationResponse
    invalidateTokens: Boolean
    addCategory(category: CategoryInput!): AddCategoryMutationResponse
    removeCategory(id: ID!): RemoveCategoryMutationResponse
    updateCategory(id: ID!, category: CategoryInput!): UpdateCategoryMutationResponse
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

  type LoginMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type RegisterMutationResponse implements MutationResponse {
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

export default typeDefs;
