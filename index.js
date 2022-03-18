const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/jogos", (req, res) => {
  res.send("Aba jogos");
});

app.get("/filmes", (req, res) => {
  res.send("Aba filmes");
});
  
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));