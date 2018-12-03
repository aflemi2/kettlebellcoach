const conn = require('./connection');
const { Sequelize } = conn;

const Workout = conn.define('workout', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
 });

 module.exports = Workout;