const db = require('./db')

//Creating a model
const user =  db.sequelize.define("users", {
  id:{
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  u_name:{
    type: db.Sequelize.STRING
  },
  email:{
    type: db.Sequelize.STRING
  }
})

//Sync your model with mysql
//user.sync({force: true}) - table alreay created

//Use user model in other files
module.exports = user

/*user.create({
  u_name: req.body.name,
  email: req.body.email
})*/