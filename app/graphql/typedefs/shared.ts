import { gql } from 'apollo-server-express';

const shared = gql`
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`;

export default shared;
