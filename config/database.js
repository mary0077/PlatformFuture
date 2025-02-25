const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('escola', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306, 
  logging: false,
});

module.exports = sequelize;
