'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Students',
      [{
        id: 1,
        name: 'Raquel da Silva',
        guardian: 'José - Pai',
        phone1: '7799999990',
        phone2: '7799999991',
        email: 'raquel@mail.com',
      },
      {
        id: 2,
        name: 'Paulo Souza',
        guardian: 'Maria - Mãe',
        phone1: '7799999992',
        phone2: '7799999993',
        email: 'paulo@mail.com',
      },
      {
        id: 3,
        name: 'Carla Santos',
        guardian: 'Naiara - Irmã',
        phone1: '7799999994',
        phone2: '7799999995',
        email: 'carla@mail.com',
      },
      {
        id: 4,
        name: 'José Oliveira',
        guardian: 'Marcio - Tio',
        phone1: '7799999996',
        phone2: '7799999997',
        email: 'jose@mail.com',
      },
      {
        id: 5,
        name: 'Lucas Bahia',
        guardian: 'Geraldo - Pai',
        phone1: '7799999998',
        phone2: '7799999999',
        email: 'lucas@mail.com',
      },
      {
        id: 6,
        name: 'Daniela Nogueira',
        guardian: 'Carmem - Mãe',
        phone1: '779999989',
        phone2: '779999988',
        email: 'daniela@mail.com',
      },
      {
        id: 7,
        name: 'Jorge Araujo',
        guardian: 'Rita - Avó',
        phone1: '779999987',
        phone2: '779999986',
        email: 'jorge@mail.com',
      },
      {
        id: 8,
        name: 'Silvana Costa',
        guardian: 'Vilson - Irmão',
        phone1: '779999985',
        phone2: '779999984',
        email: 'silvana@mail.com',
      }], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
