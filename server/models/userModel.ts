import { DataTypes, Model } from "sequelize";
import sequelize from "../database/connection_db"; // Conexión a la base de datos

interface UserModelAttributes {
  id: number;
  userId: number;
  title: string;
  content: string;
  imageUrl?: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

class UserModel
  extends Model<UserModelAttributes>
  implements UserModelAttributes
{
  public id!: number;
  public userId!: number;
  public title!: string;
  public content!: string;
  public imageUrl?: string;
  public likes!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    likes: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "posts",
  }
);

export default UserModel;
