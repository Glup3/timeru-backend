import { ApolloServer, gql } from 'apollo-server-express';

import express = require('express');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (): string => 'Hello World!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.get('/', (req, res): void => {
  res.send('Hello World!');
});

app.listen(4000, (): void => {
  console.log('Express server is listening on port 4000!');
});
