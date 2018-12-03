const conn = require('./connection');
const { Sequelize } = conn;

const ExerciseItem = conn.define('exerciseitem', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
 });

 module.exports = ExerciseItem;