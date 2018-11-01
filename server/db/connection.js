const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/kettlebelldb', {logging:true});

module.exports = conn;
