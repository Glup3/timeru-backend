import { gql } from 'apollo-server-express';

const timeEntry = gql`
  type TimeEntry {
    id: ID
    title: String
    description: String
    start: Date
    end: Date
    duration: Int
    valuable: Boolean
    user: User
    project: Project
    category: Category
  }

  extend type Query {
    timeEntries(start: Date!, end: Date!): [TimeEntry]
    isTimerRunning: Boolean
  }

  extend type Mutation {
    startTimer(timerInput: StartTimerInput!): StartTimerMutationResponse
    stopTimer(end: Date!): StopTimerMutationResponse
  }

  type StartTimerMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    timeEntry: TimeEntry
  }

  type StopTimerMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    timeEntry: TimeEntry
  }

  input StartTimerInput {
    start: Date
    title: String
    description: String
    valuable: Boolean
    projectId: ID
    categoryId: ID
  }
`;

export default timeEntry;
