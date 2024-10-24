import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './database/connection_db'; // Conexión a la base de datos
import userRoutes from './routes/userRoutes'; // Rutas de user

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes); // 

// Conexión a la base de datos
sequelize
  .sync({alter: true})
  .then(() => {
    console.log('Conexión a la base de datos exitosa (￣y▽￣)╭ Ohohoho.....');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos (•ˋ _ ˊ•)', error);
  });

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
