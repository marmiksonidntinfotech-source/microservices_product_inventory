const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "product_db",
  "root",
  "password",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
