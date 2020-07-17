"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("productOrders", [
      {
        productId: 1,
        orderId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        orderId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        orderId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        orderId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        orderId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        orderId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        orderId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        orderId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 6,
        orderId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        orderId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        orderId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("productOrders", null);
  },
};
