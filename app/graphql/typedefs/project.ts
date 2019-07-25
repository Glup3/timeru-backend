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
    updateProject(id: ID!, project: ProjectInput!): UpdateProjectMutationResponse
    removeProject(id: ID!): RemoveProjectMutationResponse
  }

  type AddProjectMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    project: Project
  }

  type UpdateProjectMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    project: Project
  }

  type RemoveProjectMutationResponse implements MutationResponse {
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
