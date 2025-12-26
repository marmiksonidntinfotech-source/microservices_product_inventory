const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Inventory = sequelize.define("Inventory", {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Inventory;
