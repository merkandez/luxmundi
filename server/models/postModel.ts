import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db';

const postModel = (connection_db.define('post', {}, {}) = {});

export default postModel;
