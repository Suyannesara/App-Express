const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

const sequelize = new Sequelize("REGISTERSYSTEM", "root", "1234", {host:"localhost", dialect: "mysql"})

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  u_name: DataTypes.STRING,
  email: DataTypes.STRING
  /*createdAt: DataTypes.DATE,
  updateAt: DataTypes.DATE*/
  
}, { sequelize, modelName: 'user' });

//Sync your model with mysql
//user.sync({force: true}) - table alreay created

//Use user model in other files
module.exports = User

/*user.create({
  u_name: req.body.name,
  email: req.body.email
})*/