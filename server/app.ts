import express from "express";
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());

//Rutas de autenticación
app.use('/api/auth', authRoutes);

//Inicializa el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
}
)