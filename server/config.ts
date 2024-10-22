import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Definimos las variables necesarias para la base de datos de desarrollo
const DB_DEV_NAME: string = process.env.DB_DEV_NAME as string;
const DB_USER: string = process.env.DB_USER as string;
const DB_PASSWORD: string = process.env.DB_PASSWORD as string;
const DB_HOST: string = process.env.DB_HOST as string;
const DB_PORT: number = Number(process.env.DB_PORT) || 3306;
const NODE_ENV: string = process.env.NODE_ENV || 'development'; // Valor por defecto
const DB_TEST_NAME: string = process.env.DB_TEST_NAME as string || 'test_db'; // Valor por defecto si no está definido
const JWT_SECRET: string = process.env.JWT_SECRET as string; // JWT_SECRET

// Exportar las variables
export {
  DB_DEV_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  NODE_ENV,
  DB_TEST_NAME,
  JWT_SECRET, // Asegúrate de exportar JWT_SECRET
};
