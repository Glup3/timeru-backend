import 'reflect-metadata';

import { startConnection } from './db';
import server from './server';

require('dotenv').config();

const port = process.env.PORT || 4000;

(async () => {
  await startConnection();

  server.listen(port, () => console.log(`GraphQL Server is listening on port ${port}!`));
})();
