import { gql } from 'apollo-server-express';

const project = gql`
  type Project {
    id: ID
    title: String
    description: String
    color: String
    codename: String
  }

  extend type Mutation {
    addProject(project: ProjectInput!): AddProjectMutationResponse
  }

  type AddProjectMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    project: Project
  }

  input ProjectInput {
    title: String
    description: String
    color: String
    codename: String
  }
`;

export default project;
