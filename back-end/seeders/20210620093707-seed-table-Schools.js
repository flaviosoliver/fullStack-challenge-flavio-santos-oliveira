'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Schools',
      [{
        id: 1,
        name: 'Escola Leste',
        principal: 'anasilva@mail.com',
      },
      {
        id: 2,
        name: 'Escola Oeste',
        principal: 'oliveira@mail.com',
      }], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Schools', null, {});
  }
};
