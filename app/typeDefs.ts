import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Error {
    path: String!
    message: String!
  }

  type Mutation {
    register(email: String!, password: String!, firstName: String!, lastName: String!): [Error!]
  }
`;

export default typeDefs;
