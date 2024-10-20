import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {validationResult} from 'express-validator';
import {User} from '../models/user';
import { error } from 'console';





//Registro de nuevo usuario
export const registerUser = async (req: Request, res: Response) => {

    //validación de datos
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    const {email, password} = req.body;
    
    try {
        //verificar si el usuario ya existe
        let user = await User.findOne({where: {email}});
        if (user) {
            return res.status(400).json({msg: 'El usuario ya existe'});
        }

        //Crear nuevo usuario
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = await User.create({email, password: hashedPassword})

        //Genero token JWT
        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        };

        jwt.sign(payload, process.env.JWT_SECURE as string,
            {expiresIn: '1h'}, // Token por 1 hora
            (error, token) => {
                if (error) throw error;
                res.json({token});
            }
            
        );
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error en el servidor')

        
    }
};

// Login de usuario
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      // Verificar si el usuario existe
      let user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ msg: 'Credenciales inválidas' });
      }
  
      // Verificar contraseña
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Credenciales inválidas' });
      }
  
      // Generar token JWT
      const payload = {
        user: {
          id: user.id,
          role: user.role,
        },
      };
  
      jwt.sign(
        payload,
        process.env.JWT_SECURE as string,
        { expiresIn: '1h' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Error en el servidor');
    }
  };