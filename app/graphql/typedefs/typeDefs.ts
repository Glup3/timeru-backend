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

  type Error {
    path: String!
    message: String!
  }

  type Mutation {
    register(email: String!, password: String!, firstName: String!, lastName: String!, username: String!): [Error!]
    login(email: String!, password: String!): [Error!]
    invalidateTokens: Boolean
    addCategory(title: String, icon: String, valuable: Boolean): Category
    removeCategory(id: ID): Category
    updateCategory(id: ID!, title: String, icon: String, valuable: Boolean): Category
  }
`;

export default typeDefs;
