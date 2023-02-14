import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME || 'db_asutp',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'R00tP@ssw0rd',
    {
        dialect: 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        define: {
            freezeTableName: true,
            timestamps: true,
            createdAt: true,
            updatedAt: false,
        }
    },
);

export default sequelize;

