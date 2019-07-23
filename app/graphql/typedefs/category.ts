import { gql } from 'apollo-server-express';

const category = gql`
  type Category {
    id: ID
    title: String
    icon: String
    valuable: Boolean
  }

  extend type Query {
    getAllCategories: [Category]
    getCategory(id: ID): Category
  }

  extend type Mutation {
    addCategory(category: CategoryInput!): AddCategoryMutationResponse
    removeCategory(id: ID!): RemoveCategoryMutationResponse
    updateCategory(id: ID!, category: CategoryInput!): UpdateCategoryMutationResponse
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
`;

export default category;
