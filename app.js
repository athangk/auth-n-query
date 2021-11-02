require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
// importing user context
const User = require("./models/user");
const auth = require("./middleware/auth");
const usersRouter = require("./routes/user.routes")

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = app;