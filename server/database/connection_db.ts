import { Sequelize } from 'sequelize';

import { DB_DEV_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, NODE_ENV, DB_TEST_NAME } from '../config';

// Definir el nombre de la base de datos dependiendo del entorno
const DB_NAME = NODE_ENV === 'test' ? DB_TEST_NAME : DB_DEV_NAME;

// Crear la conexión a Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  port: DB_PORT,
});

// Autenticación y manejo de errores de la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('🚀Conexión exitosa a la base de datos:', DB_NAME);
  } catch (error) {
    console.error('❌Error al conectar con la base de datos:', error);
  }
})();

export default sequelize;
