//1 - IMPORTS
const express = require("express");
const res = require("express/lib/response");
//express things will be accessed through this constant app
const app = express();

const axios = require('axios')

// TODO: add CORS to headers
app.use((re, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://localhost:8080")
  res.header("Access-Control-Allow-Origin", "GET, PUT, POST, DELETE")
  app.use(cors())
  next()
})

const cors = require('cors');


//1.2 - BODY PARSER
//Inserting body-parser module
const bodyParser = require("body-parser");
const { path } = require("express/lib/application");

//1.3 - MODEL BD
const User = require("./models/User");
const { get } = require("express/lib/response");

//2 - CONFIG
app.use(express.static(__dirname + '/views'))
//2.1 - Template engine
app.set("views", "./views")

//2.2 - BodyParser
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())


//3 - ROUTES
//3.1 - ROUTE 1
app.get("/", function (req, res) {
  //sending a file
  res.sendFile('form.html',  {root : './views'})
})

//3.2 - ROUTE 2
// app.get("/records", async function (req, res) {
//   const users = await User.findAll()

//   users.map((user) => {
//     return user.dataValues
//   })
//   //console.log(JSON.stringify(users))
//   //res.render('records', { users : users(JSON.stringify) })
//   res.send(JSON.stringify({ users : users }))
// })

app.get("/users", async function (req, res) {
  const users = await User.findAll()

  users.map((user) => {
    return user.dataValues
  })

  res.status(200)
  res.send(JSON.stringify(users))

})

app.post("/users", async function (req, res) {
  User.create({
    u_name: req.body.name,
    email: req.body.email,
  }).then(function () {
    res.status(201).send(req.body)
  }).catch(function (erro) {
    res.send("There was an error on register: " + erro)
  })
})

//3.3 - ROUTE 3
app.post("/formResult", function (req, res) {
  //Push data from the form
  User.create({
    u_name: req.body.name,
    email: req.body.email,
    //Know if user was created wih success
  }).then(function () {
    res.redirect('/users')
  }).catch(function (erro) {
    res.send("There was an error on register: " + erro)
  })

})


//SERVER
//opening server, it should be the last insert of the code
app.listen(8081, function () {
  console.log("O servidor ta rodandooooo")
});


