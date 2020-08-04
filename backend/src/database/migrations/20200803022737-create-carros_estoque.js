'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.createTable('carros_estoque2', {
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
       },
       marca: {
         type: Sequelize.STRING,
         allowNull: false
       },
       modelo: {
        type: Sequelize.STRING,
        allowNull: false
       },
       ano: {
        type: Sequelize.INTEGER,
        allowNull: false
       },
       preco: {
        type: Sequelize.STRING,
        allowNull: false
       },
       quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
       },
        motor: {
          type: Sequelize.STRING,
         allowNull: false
        },
        potencia: {
          type: Sequelize.STRING,
         allowNull: false
        },
        torque: {
          type: Sequelize.STRING,
          allowNull: false
        },
        peso: {
          type: Sequelize.STRING,
         allowNull: false
        },
        created_At: {
          type: Sequelize.DATE
      },
      updated_At: {
         type: Sequelize.DATE
        }
     });
     
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('carros_estoque2');
     
  }
};
