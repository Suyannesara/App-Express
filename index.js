//1 - IMPORTS
  const express = require("express");
  const res = require("express/lib/response");
  //express things will be accessed through this constant app
  const app = express();

  //1.1 -TEMPLATE ENGINE
  //Inserting handlebars module
  const {engine} = require("express-handlebars")

  //1.2 - BODY PARSER
  //Inserting body-parser module
  const bodyParser = require("body-parser");
  const {path} = require("express/lib/application");

  //1.3 - MODEL BD
  const user = require("./models/User");
const { get } = require("express/lib/response");

//2 - CONFIG
  //2.1 - Template engine - Handlebars
  //The default layout will be "main" inside /layouts
  app.engine('handlebars', engine({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
  app.set("views", "./views")

  //2.2 - BodyParser
  app.use(bodyParser.urlencoded({extend: false}))
  app.use(bodyParser.json())


//3 - ROUTES
  //3.1 - ROUTE 1
  app.get("/", function(req, res){
    //sending a file
    res.render('form')
  })

  //3.2 - ROUTE 2
  app.get("/records", function(req, res){
    //Return all users inside database
    user.all().then(function(users){
      //var users receives users rom then
      res.render('records')
    })
    
  })

  //3.3 - ROUTE 3
  app.post("/formResult", function(req, res){
    //Push data from the form
    user.create({
      u_name: req.body.name,
      email: req.body.email,
    //Know if user was created wih success
    }).then(function(){
      res.redirect('/records')
    }).catch(function(erro){
      res.send("There was an error on register: " + erro)
    })

  })

//SERVER
//opening server, it should be the last insert of the code
app.listen(8081, function(){
  console.log("O servidor ta rodandooooo")
});


