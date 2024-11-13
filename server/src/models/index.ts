import User from './userModel';
import PostModel from './postModel';

User.hasMany(PostModel, { foreignKey: 'userId', as: 'posts' });
PostModel.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export { User, PostModel };
