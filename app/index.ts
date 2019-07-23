import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { verify } from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import express from 'express';

import resolvers from './graphql/resolvers/resolvers';
import typeDefs from './graphql/typedefs';
import User from './entity/User';
import { createTokens } from './auth';

require('dotenv').config();

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }: any): any => ({ req, res }) });

const app = express();

app.use(cookieParser());

app.use(
  async (req: any, res: any, next: any): Promise<void> => {
    const refreshToken = req.cookies['refresh-token'];
    const accessToken = req.cookies['access-token'];

    if (!refreshToken && !accessToken) {
      return next();
    }

    try {
      const data: any = verify(accessToken, process.env.JWT_ACCESS_SECRET);
      req.userId = data.userId;
      req.role = data.role;
      return next();
    } catch {} // eslint-disable-line no-empty

    if (!refreshToken) {
      return next();
    }

    let data: any;

    try {
      data = verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch {
      return next();
    }

    const user = await User.findOne(data.userId);

    if (!user || user.count !== data.count) {
      return next();
    }

    const tokens = createTokens(user);

    res.cookie('refresh-token', tokens.refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 7 });
    res.cookie('access-token', tokens.accessToken, { maxAge: 1000 * 60 * 15 });
    req.userId = user.id;

    return next();
  }
);

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
