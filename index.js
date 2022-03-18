const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/index", (req, res) => {
    res.render("index"); // Nome do arquivo, o EJS já busca dentro da pasta views.
  });
  
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));