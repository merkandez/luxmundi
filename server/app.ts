import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './database/database'; // Conexión a la base de datos
import authRoutes from './routes/authRoutes'; // Rutas de user

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // Ruta base para las entradas posts del blog

// Conexión a la base de datos
sequelize
  .sync({alter: true})
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error);
  });

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
