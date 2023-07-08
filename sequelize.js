// sequelize.js
``
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize({
  dialect: '<database-dialect>',
  host: '<database-host>',
  port: '<database-port>', 
  database: '<database-name>',
  username: '<database-username>',
  password: '<database-password>', 
});

// Export the Sequelize instance
module.exports = sequelize;
