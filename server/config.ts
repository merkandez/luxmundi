import { config } from "dotenv";

// Cargar variables de entorno desde el archivo .env
config();

// Definimos las variables necesarias para la base de datos de desarrollo
const DB_DEV_NAME: string | undefined = process.env.DB_DEV_NAME;
const DB_USER: string | undefined = process.env.DB_USER;
const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD;
const DB_HOST: string | undefined = process.env.DB_HOST;
const NODE_ENV: string | undefined = process.env.NODE_ENV;

// Validamos que todas las variables necesarias estén presentes
if (!DB_DEV_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST) {
  throw new Error("⚠️  Missing environment variables to database connection ⚠️");
}

export { DB_DEV_NAME, DB_USER, DB_PASSWORD, DB_HOST, NODE_ENV };
