import jwt from 'jsonwebtoken';

export const tokenSign = (user: any): string => {
  console.log("Firmando token para el usuario:", { id: user.id, role: user.role });
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
