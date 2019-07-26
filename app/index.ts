import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import jwt from 'express-jwt';
import bodyParser from 'body-parser';
import express from 'express';

import resolvers from './graphql/resolvers/resolvers';
import typeDefs from './graphql/typedefs';

require('dotenv').config();

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }: any): any => ({ req, res }) });

const app = express();

const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
});

app.use(bodyParser.json(), auth);

server.applyMiddleware({ app });

app.get('/', (req, res): void => {
  res.send('Hello World!');
});

const port = process.env.PORT || 4000;

try {
  createConnection().then((): void => {
    app.listen(port, (): void => {
      console.log(`Express server is listening on port ${port}!`);
    });
  });
} catch (error) {
  console.error('starting server', error);
}
