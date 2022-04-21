
//Verify if connection is correct
//then e catch são funções de call back, chamadas após o evento de tentativa de autenticação
/*
sequelize.authenticate().then(function(){
  console.log("Conected to BD")
}).catch(function(erro){
  console.log("Falha  na conexão " + erro)
})*/

//Creating a model
const user =  sequelize.define("users", {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  u_name:{
    type: Sequelize.STRING
  },
  email:{
    type: Sequelize.STRING
  }
})

//Sync your model with mysql
//user.sync({force: true})

user.create({
  u_name: req.body.name,
  email: req.body.email
})