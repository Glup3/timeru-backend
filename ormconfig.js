require('dotenv').config();

module.exports = {
  type: 'mysql',
  host: process.env.HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: process.env.SYNCHRONIZE || false,
  logging: process.env.LOGGING || false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
};
