"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Inventories", [
      {
        productId: 1,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Inventories", null, {});
  },
};
