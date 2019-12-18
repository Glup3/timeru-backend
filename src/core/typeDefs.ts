import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

export default typeDefs;
