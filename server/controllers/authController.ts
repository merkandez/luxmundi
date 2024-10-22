import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {validationResult} from 'express-validator';
import {User} from '../models/User';
import sequelize from  '../config';   

//Registro de nuevo usuario
export const registerUser = async (req: Request, res: Response) => {

    //validación de datos
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    const {username, email, password, avatar_url, role} = req.body;
    
    try {
        //verificar si el usuario ya existe
        let user = await User.findOne({where: {email}});
        if (user) {
            return res.status(400).json({msg: 'El usuario ya existe'});
        }

        //Crear nuevo usuario
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = await User.create({
          username,
          email,
          password: hashedPassword,
          avatar_url: avatar_url || 'default-avatar-url.png',
          role: role || 'user'
        });

        //Genero token JWT 
        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET as string,
            {expiresIn: '1h'}, // Token por 1 hora
            (error, token) => {
                if (error) throw error;
                res.json({token});
            }
        );
        
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
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
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    }
  };