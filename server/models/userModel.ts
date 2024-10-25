import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connection_db';
import { IUser } from '../interfaces/IUsers';

class User extends Model<IUser> implements IUser {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: 'admin' | 'user'; // Campo para el rol
  public imageUrl?: string; // URL de la imagen de perfil
  public last_login?: Date; // Fecha del último inicio de sesión
  public readonly createdAt!: Date; // Timestamp de creación
  public readonly updatedAt!: Date; // Timestamp de actualización
}

// Definir el modelo User en Sequelize
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(100), 
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(150), 
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255), 
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'), // Campo para el rol
      allowNull: false,
      defaultValue: 'user', // Valor por defecto
    },
     imageUrl: {
      type: DataTypes.STRING(255), // URL de la imagen de perfil
      allowNull: true,
    },
    last_login: {
      type: DataTypes.DATE, // Fecha del último inicio de sesión
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'users',
    modelName: 'User',
    timestamps: true, // Habilitar los timestamps automáticamente
  }
);

export default User;
