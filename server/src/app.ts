import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import postRoutes from "../routes/postRoutes";
import { Sequelize } from "sequelize";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/posts", postRoutes); // Ruta base para las entradas posts del blog

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
