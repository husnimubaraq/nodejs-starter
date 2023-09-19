require("dotenv").config();

const { Sequelize } = require("sequelize");

const dbConfig = {
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  logging: false,
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 60000,
  },
  timezone: '+07:00',
});

/**
 * Glitch using this function connection outside initiation server
 */
const dbConnection = async () => {
  console.log("Databse Config: ", process.env.DATABASE_HOST, process.env.DATABASE_PORT, process.env.DATABASE_DIALECT);
  try {
    await sequelize.authenticate();
    console.log("Databse Conn Status: Connect successfully");
  } catch (err) {
    console.error("Databse Conn Status: Unable to connect");
    if (process.env.NODE_ENV) console.error(err.message);
    if (process.env.NODE_ENV) console.error(err.original);
  }
};

module.exports = { sequelize, dbConnection };