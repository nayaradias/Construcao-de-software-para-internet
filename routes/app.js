var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/registro-usuario-salvar',function(req,res,next){
res.render('registro-usuario-salvar');
});

router.post("/registro-usuario-salvar", function(req, res, next) {
  var senha = req.body.password;
  var confirm = req.body.confirm;
  var check;
  if(senha == confirm)
    check = senha;
    else{
      res.render('erro');
    }
  var userObject = new User({
    firstName: req.body.username,
    lastName: req.body.name,
    email: req.body.email,
    password: check,
  });
  
  userObject.save();
 res.redirect('/registro-usuario-salvar');
});


router.get("/node-mongodb-mongoose-user", function(req, res, next) {
  res.render("node1");
});

router.post("/node-mongodb-mongoose-user", function(req, res, next) {
  var emailVar = req.body.emailBody;
  var userObject = new User({
    firstName: "Vinicius",
    lastName: "Rosalem",
    password: "Segredo",
    email: emailVar
  });
  userObject.save();
  res.redirect("/node-mongodb-mongoose-user");
});

router.get("/node-mongodb-mongoose-user-busca", function(req, res, next) {
  User.findOne({}, function(err, documents) {
    if (err) {
      return res.send("ERRO ! ! !");
    }

    res.render("node1", {
      firstnamev: documents.firstName,
      lastNamev: documents.lastName,
      passwordv: documents.password,
      emailv: documents.email,
      messagev: documents.message
    });
  });
});

router.post("/message", (req, res, next) => {
  var messageVar = req.body.messageBody;
  res.redirect("/message/" + messageVar);
});

router.get("/message/:msgParam", (req, res, next) => {
  res.render("node", { message: req.params.msgParam });
});

module.exports = router;
