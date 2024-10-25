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

// Función para crear admin y el que conecte 
const startServer = async () => {
  try { // Sincronizar la base de datos
  await sequelize.sync({alter: true})
    console.log('Conexión a la base de datos exitosa (￣y▽￣)╭ Ohohoho.....');

    // Llama a la función para crear el usuario admin
  await createAdminUser();

  // Inicio del servidor
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
  } catch (error)  {
    console.error('Error al conectar a la base de datos (•ˋ _ ˊ•)', error);
  }
};

  // Llama a la función para iniciar el servidor
startServer();
