import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './database/connection_db.js'; // Conexión a la base de datos
import postRoutes from './routes/postRoutes.js'; // Rutas de posts
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use('/api/posts', postRoutes); // Ruta base para las entradas posts del blog
// Conexión a la base de datos
sequelize
    .sync()
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
