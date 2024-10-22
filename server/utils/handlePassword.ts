import bcrypt from 'bcryptjs';

// Función para encriptar una contraseña en texto plano
export const encrypt = async (passwordPlain: string): Promise<string> => {
  const hash = await bcrypt.hash(passwordPlain, 10);
  return hash;
};

// Función para comparar una contraseña en texto plano con un hash
export const compare = async (passwordPlain: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(passwordPlain, hashedPassword);
};
