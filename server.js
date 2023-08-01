const express = require("express");

const app = express()
const bcrypt = require("bcrypt")  //important bcrypt
const users = []

app.use(express.urlencoded({ extended: false }))

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    console.log(users);   //display newly registered in this console
    res.redirect("/login")
  } catch (e){
    console.log(e);
    res.redirect("/register")

  }
})


// routes
app.get('/', (req, res) => {
  res.render("index.ejs")
})
app.get('/login', (req, res) => {
  res.render("login.ejs")
})

app.get('/register', (req, res) => {
  res.render("register.ejs")
})
console.log(users); // display newly registered in consloe 
app.listen(5000);
