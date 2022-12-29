const { application } = require("express");
const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Homepage"));
app.get("/contact", (req, res) => res.send("Contact page"));
app.get("/profile/id/:id", (req, res) =>
  res.send("Request here id : " + req.params.id)
);
app.get("/profile/name/:name", (req, res) =>
  res.send("Request here name : " + req.params.name)
);

app.listen(3000);
