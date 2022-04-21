  //1 - IMPORTS
    //Import sequelize module
    const Sequelize = require("sequelize")

  //2 - CONFIG
    //2.1 - DATABASE - mysql
    //Conect to dabase
    const sequelize = new Sequelize("REGISTERSYSTEM", "dwcorp", "17hy23", {host:"170.83.132.66:3306", dialect: "mysql"})

  //Exporting
  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }
