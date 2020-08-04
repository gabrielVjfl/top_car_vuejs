const Sequelize = require('sequelize')
 
const db = require('../config/bd')
 
const Carros_Estoque2 = require('./models/Carros_Estoque2')
 
const connection = new Sequelize(db)
 
Carros_Estoque2.init(connection)
 
module.exports = connection
// MIGARTIONS 
