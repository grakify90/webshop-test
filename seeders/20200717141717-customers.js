"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert("customers", [
      {
        firstName: "Nina",
        lastName: "van Es",
        address: "Achterom 55 Dordrecht",
        email: "ninavanes1990@hotmail.com",
        password: "poep99",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Milou",
        lastName: "van Es",
        address: "Wilhelminakade 66 Vlissingen",
        email: "milouvanes@hotmail.com",
        password: "fancywachtwoord",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Anouk",
        lastName: "Reijers",
        address: "Hugo de Grootplein 46 Dordrecht",
        email: "anoukreijers@hotmail.com",
        password: "ilovedonkeremannen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("customers", null);
  },
};
