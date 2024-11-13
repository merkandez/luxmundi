import bcrypt from 'bcryptjs';

// Función para encriptar una contraseña en texto plano
export const encrypt = (passwordPlain: string): Promise<string> => {
  return bcrypt.hash(passwordPlain, 10);
};

// Función para comparar una contraseña en texto plano con un hash
export const compare = (passwordPlain: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(passwordPlain, hashedPassword);
};
