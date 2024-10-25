import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';

// Registro de nuevo usuario
export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { username, email, password, avatar_url, role } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ msg: 'El usuario ya existe' });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            avatar_url: avatar_url || 'default-avatar-url.png',
            role: role || 'user',
        });

        // Generar token JWT
        const payload = {
            user: {
                id: newUser.id,
                role: newUser.role,
            },
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }, // Token válido por 1 hora
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
};
// Login de usuario
export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        res.status(400).json({ message: 'Credenciales incorrectas' });
        return;
      }
  
      const isMatch = await bcrypt.compare(password, user.password); // Usamos bcrypt.compare
      if (!isMatch) {
        res.status(400).json({ message: 'Credenciales incorrectas' });
        return;
      }
  
    // Generar el token JWT
    const payload = {
        user: {
            id: user.id,
            role: user.role,
        },
    };

    const token = jwt.sign(
        payload,
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' } // Token válido por 1 hora
    );

    res.json({ message: 'Inicio de sesión exitoso', token });
} catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    } else {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
}
};  
  