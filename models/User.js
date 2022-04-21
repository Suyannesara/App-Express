const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// const sequelize = new Sequelize("REGISTERSYSTEM", "root", "1234", {host:"localhost", dialect: "mysql"})

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  u_name: DataTypes.STRING,
  email: DataTypes.STRING
  
}, { sequelize, modelName: 'user' });

//Sync your model with mysql
User.sync({force: true}) //- table alreay created

//Use user model in other files
module.exports = User