import { Model, DataTypes } from 'sequelize';
import sequelize from '../../db';

class UserRoleModel extends Model {
    declare id: number;
    declare name: string;
    declare description: string;
}

UserRoleModel.init({
    id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
    },
    rules: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT('medium'),
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'user_roles',
});

export default UserRoleModel;
