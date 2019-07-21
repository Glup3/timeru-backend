import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import express from 'express';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

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
