"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("orders", [
      {
        customerId: 1,
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null);
  },
};
