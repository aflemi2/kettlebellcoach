const conn = require('./connection');
const { Sequelize } = conn;

const Category = conn.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
 });

 module.exports = Category;
