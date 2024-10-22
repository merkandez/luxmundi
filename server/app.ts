import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from './routes/authRoutes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//Rutas de autenticación
app.use('/api/auth', authRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});