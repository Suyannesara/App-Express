const express = require("express");
const res = require("express/lib/response");
//express things will be accessed through this constant app
const app = express();

//Inserting body-parser module
const bodyParser = require("body-parser");
const {path} = require("express/lib/application");

//Config
//BodyParser
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())


//ROTA 1
app.get("/", function(req, res, next){
  //sending a file
  res.sendFile(__dirname + "/html/index.html")
})


//ROTA 2
app.post("/formResult", function(req, res, next){
  //Push data from the form
  let personData = {
    name: req.body.name,
    email: req.body.email
  }

  
  res.send(`<h1>Cadastro realizado com sucesso!</h1> <br>
  <ul>
    <li><strong>Nome:</strong> ${personData.name}</li>
    <li><strong>E-mail:</strong> ${personData.email}</li>
  </ul>`
  )
})

//SERVER
//opening server, it should be the last insert of the code
app.listen(8081, function(){
  console.log("O servidor ta rodandooooo")
});


