import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/connection_db'; // Conexión a la base de datos

class PostModel extends Model {
  //Post: Es la clase que representa cada entrada del blog. Extiende de Model, que es la clase base de Sequelize.
  public id!: number; // El "!" indica que el campo será obligatorio
  public userId!: number; // Relación con el usuario que crea la entrada
  public title!: string;
  public content!: string;
  public imageUrl?: string; // URL de la imagen asociada (opcional?)
  public likes!: number; // Número de likes (inicializado a 0)
  public readonly createdAt!: Date; // Fecha de creación (automática)
  public readonly updatedAt!: Date; // Fecha de actualización (automática)
}
// Definimos el modelo
PostModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED, // Entero sin signo (positivo)
      autoIncrement: true, // Autoincremental
      primaryKey: true, // Clave primaria
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false, // No puede ser nulo, debe haber un usuario asociado
    },
    title: {
      type: DataTypes.STRING(255), // String de hasta 255 caracteres
      allowNull: false, // El título es obligatorio
    },
    content: {
      type: DataTypes.TEXT, // Campo de texto largo para el contenido del post
      allowNull: false, // El contenido es obligatorio
    },
    imageUrl: {
      type: DataTypes.STRING(255), // URL de la imagen (opcional)
      allowNull: true, // Puede ser nulo si no se proporciona imagen
    },
    likes: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0, // El valor inicial de likes será 0
      validate: {
        min: 0, // Aseguramos que no haya likes negativos
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Fecha y hora actuales al crear el post
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Fecha y hora al actualizar
    },
  },
  {
    sequelize, // La conexión con la base de datos
    tableName: 'posts', // Nombre de la tabla en la base de datos
  }
);

export default PostModel;
