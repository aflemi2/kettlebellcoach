const conn = require('./connection');
const { Sequelize } = conn;

const Exercise = conn.define('exercise', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  difficulty: {
    type: Sequelize.INTEGER
  }
 });

 module.exports = Exercise;
