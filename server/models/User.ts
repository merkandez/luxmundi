import { Model, DataTypes }  from "sequelize";
import sequelize from "../database/database";  // Asegúrate de tener una instancia de Sequelize exportada desde tu configuración

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public avatarUrl?: string; // URL opcional de avatar
  public role!: 'user' | 'admin';
}


// Definición del modelo
User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Valida que sea un email válido
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo si el usuario no sube un avatar
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize, // Conexión a la base de datos
    tableName: 'users', // Nombre de la tabla
    timestamps: true, // created_at y updated_at automáticas
    underscored: true, // Para que Sequelize utilice el snake_case en lugar de camelCase
  }
);

export default User;