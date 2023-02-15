import { Model, DataTypes } from 'sequelize';
import sequelize from '../../db';
import UserModel from './userModel';
import UserRoleModel from './userRoleModel';

class UserToRoleModel extends Model {
    declare user_id: number;
    declare role_id: number;
}

UserToRoleModel.init({
    user_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        primaryKey: true,
    },
    role_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'user_to_role'
});

UserModel.belongsToMany(UserRoleModel, 
    {
        through: {
            model: UserToRoleModel,
            unique: false,
        },
       foreignKey: 'user_id',
       foreignKeyConstraint: true,
       constraints: true,
       onDelete: 'RESTRICT',
       onUpdate: 'CASCADE',
    }
);

UserRoleModel.belongsToMany(UserModel, 
    {
        through: {
            model: UserToRoleModel,
            unique: false,
        },
       foreignKey: 'role_id',
       foreignKeyConstraint: true,
       constraints: true,
       onDelete: 'RESTRICT',
       onUpdate: 'CASCADE',
    }
);

export default UserToRoleModel;
