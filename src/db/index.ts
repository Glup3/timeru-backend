import { createConnection } from 'typeorm';

// eslint-disable-next-line import/prefer-default-export
export const startConnection = async () => {
  await createConnection();
};
