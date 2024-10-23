import { Sequelize } from "sequelize";
import {
  DB_DEV_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  NODE_ENV,
  DB_TEST_NAME,
} from "../config";

const DB_NAME = NODE_ENV === "test" ? DB_TEST_NAME : DB_DEV_NAME;

const sequelize = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD!, {
  host: DB_HOST,
  dialect: "mysql",
  port: DB_PORT!,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
})();

export default sequelize;
