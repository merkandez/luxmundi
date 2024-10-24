import { registerUser, loginUser } from '../controllers/authController';
import { Router } from 'express';


const authRouter = Router();

// Ruta para registrar usuarios
authRouter.post(
    '/register', 
   
    registerUser
  );
// Ruta para loguear usuarios
//authRouter.post('/login', loginUser);

export default authRouter;


