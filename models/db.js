  //1 - IMPORTS
    //Import sequelize module
    const Sequelize = require("sequelize")

  //2 - CONFIG
    //2.1 - DATABASE - mysql
    //Conect to dabase
    const sequelize = new Sequelize("REGISTERSYSTEM", "root", "1234", {host:"localhost", dialect: "mysql"})

  //Exporting
  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }
