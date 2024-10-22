import bcrypt from 'bcrypt';

// Función para encriptar la contraseña
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Función para comparar la contraseña ingresada con la almacenada en la base de datos
export const comparePassword = async (enteredPassword: string, storedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(enteredPassword, storedPassword);
};
