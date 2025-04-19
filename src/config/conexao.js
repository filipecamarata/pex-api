import { Sequelize } from "sequelize";
import dotenv from "dotenv"
const envFile = process.env.NODE_ENV === 'dev' ? '.env.dev' :'.env'
dotenv.config({path: envFile})

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,    

    {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
})



export default sequelize