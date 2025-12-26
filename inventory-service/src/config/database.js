const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "inventory_db",
  "root",
  "password",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
