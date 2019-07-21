import 'reflect-metadata';

import { ApolloServer, gql } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import express from 'express';

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

try {
  createConnection().then((): void => {
    app.listen(4000, (): void => {
      console.log('Express server is listening on port 4000!');
    });
  });
} catch (error) {
  console.error('starting server', error);
}
