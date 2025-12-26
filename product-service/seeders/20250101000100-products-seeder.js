"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Products", [
      {
        id: 1,
        name: "Laptop",
        price: 50000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Mobile Phone",
        price: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Headphones",
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
