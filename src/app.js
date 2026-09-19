const express = require("express");
const { makeGreeting } = require("./greeting");
//add line
const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/greet", (req, res) => {
  res.json({ message: makeGreeting(req.query.name) });
});

module.exports = app;
