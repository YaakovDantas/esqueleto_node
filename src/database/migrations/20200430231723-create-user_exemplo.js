'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_exemplo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      social_name: {
        type: Sequelize.STRING
      },
      cpf_cnpj: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      activity: {
        type: Sequelize.ENUM({
          values: [ 'VIDRACEIRO', 'SERRALHEIRO', 'AUTONOMO', 'MACENEIRO', 'FABRICA', 'CONSTRUTORA', 'VENDEDOR']
        })
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_exemplo');
  }
};