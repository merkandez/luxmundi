// interface User
export interface IUser {
  id?: number;
  username: string;
  email: string;
  password: string;
  role?: 'admin' | 'user'; // Campo para el rol
  profile_image_url?: string; // URL de la imagen de perfil
  last_login?: Date; // Fecha del último inicio de sesión
  createdAt?: Date; // Timestamp de creación
  updatedAt?: Date; // Timestamp de actualización
}


