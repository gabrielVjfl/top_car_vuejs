const { Model, DataTypes } = require('sequelize')
 
class Carros_Estoque2 extends Model {
    static init(sequelize) {
      super.init({
        marca: DataTypes.STRING,
        modelo: DataTypes.STRING,
        ano: DataTypes.INTEGER,
        preco: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
        motor: DataTypes.STRING,
        potencia: DataTypes.STRING,
        torque: DataTypes.STRING,
        peso: DataTypes.STRING,
      }, {
          sequelize
      })
    }
} 
 
module.exports = Carros_Estoque2