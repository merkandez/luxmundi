import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connection_db';

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public avatarUrl?: string; // URL opcional de avatar
  public role!: 'user' | 'admin';
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
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
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  avatarUrl: {
    type: DataTypes.STRING(255), // Campo para el avatar del usuario
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
});

export default User;
