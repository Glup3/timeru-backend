import { gql } from 'apollo-server-express';

const user = gql`
  type User {
    username: String
    firstName: String
    lastName: String
    email: String
  }
`;

export default user;
