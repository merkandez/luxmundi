import { config as dotenvConfig } from "dotenv";
// Then use it as config.DB_PORT

const DB_DEV_NAME: string | undefined = process.env.DB_DEV_NAME;
const DB_USER: string | undefined = process.env.DB_USER;
const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD;
const DB_HOST: string | undefined = process.env.DB_HOST;
const DB_PORT: number | undefined = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined;
const DB_TEST_NAME: string | undefined = process.env.DB_TEST_NAME;
const NODE_ENV: string | undefined = process.env.NODE_ENV;

export {
  DB_DEV_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_TEST_NAME,
  NODE_ENV,
  DB_PORT,
  dotenvConfig as config,
};