// sequelize.js

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize({
  dialect: '<database-dialect>', // Replace with the appropriate database dialect (e.g., mysql, postgres, sqlite)
  host: '<database-host>', // Replace with the database host
  port: '<database-port>', // Replace with the database port
  database: '<database-name>', // Replace with the database name
  username: '<database-username>', // Replace with the database username
  password: '<database-password>', // Replace with the database password
});

// Export the Sequelize instance
module.exports = sequelize;
