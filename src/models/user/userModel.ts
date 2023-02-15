import { Model, DataTypes } from "sequelize";
import sequelize from "../../db";

class UserModel extends Model {
    declare id: number;
    declare email: string;
    declare password: string;
    declare status: string;
}

UserModel.init({
    id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('ACTIVE','BLOCKED','DELETED'),
        defaultValue: 'ACTIVE',
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'user_list'
});

export default UserModel;
