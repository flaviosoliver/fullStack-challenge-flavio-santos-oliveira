'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teachers',
      [{
        id: 1,
        name: 'Carlos Souza',
      },
      {
        id: 2,
        name: 'Maria Santos',
      },
      {
        id: 3,
        name: 'Julio Bahia',
      },
      {
        id: 4,
        name: 'Andreia Nogueira',
      },
      {
        id: 5,
        name: 'Miguel Araujo',
      },
      {
        id: 6,
        name: 'Silvana Costa',
      }], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teachers', null, {});
  }
};
