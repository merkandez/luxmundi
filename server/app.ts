import express from "express";
import authRoutes from './routes/authRoutes';
import sequelize from './config';
import { User } from "./models/User";

const app = express();

app.use(express.json());

//Rutas de autenticación
app.use('/api/auth', authRoutes);

//Middleware para manejo de errores 
app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

//Inicializa el servidor y la BBDD
const PORT = process.env.PORT || 5000;
const startServer = async () => {

    try {
     // Conexión a la base de datos
     await sequelize.authenticate();
     console.log('Conectado a la base de datos exitosamente.');

     // Sincroniza los modelos (sin borrar datos existentes)
     await sequelize.sync({ force: false });    

    //Levanta el servidor
    app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
}
)
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);  
    }
}

startServer();