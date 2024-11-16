import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './database/connection_db';
import postRoutes from './routes/postRoutes';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import './models/index';
import uploadRoutes from './routes/uploadRoutes';

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);
app.use(
  '/uploads',
  express.static('C:/Users/donce/Desktop/luxmundi/server/uploads')
);

// Conexión a la base de datos
sequelize
  .sync({ alter: false })
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
