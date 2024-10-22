import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Función para firmar el token JWT
export const tokenSign = (user: any): string => {
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: '24h' }
  );
  return token;
};

// Función para verificar el token JWT
export const tokenVerify = (token: string): any => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    return null;
  }
};
