import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Definimos las variables necesarias para la base de datos de desarrollo
const DB_DEV_NAME = <string>process.env.DB_DEV_NAME;
const DB_USER = <string>process.env.DB_USER;
const DB_PASSWORD = <string>process.env.DB_PASSWORD;
const DB_HOST: any = process.env.DB_HOST;
const NODE_ENV: any = process.env.NODE_ENV;
