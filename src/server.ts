import { ApolloServer } from 'apollo-server-express';
import jwt from 'express-jwt';
import bodyParser from 'body-parser';
import express from 'express';

import { typeDefs, resolvers } from './core';

require('dotenv').config();

const server = express();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const apolloServer = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }: any): any => ({ req, res }) });

const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
});

server.use(bodyParser.json(), auth);
apolloServer.applyMiddleware({ app: server });

export default server;
