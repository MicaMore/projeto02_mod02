require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: "Bubassauro",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    altura: "0.7m",
    peso: "6.9kg",
    categoria: "Seed",
    habilidade: "Overgrow",
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    altura: "0.6m",
    peso: "8.5kg",
    categoria: "Lizard",
    habilidade: "Blaze",
  },
  {
    id: 3,
    nome: "Pidgey",
    tipo: "Flying",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    altura: "0.3m",
    peso: "1.8kg",
    categoria: "Tiny Bird",
    habilidade: "Keen Eye",
  },
];

let pokemon = undefined;
let mensagem = "";
var pok = 1;

//Rotas

app.get("/", (req, res) => {
  
  setTimeout(() => {
    mensagem = "";
  }, 1000);
  res.render("index", { pokedex, pokemon, mensagem });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro", { pokedex, pokemon });
});

app.get("/edit", (req, res) => {
  res.render("edit", { pokedex, pokemon });
});

app.get("/detalhes", (req, res) => {
  res.render("detalhes", { pokedex, pok });
});

app.get("/detalhes/:id", (req, res) => {
  pok = +req.params.id;
  res.redirect("/detalhes");
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  mensagem = "Pokémon cadastrado com sucesso!";
  res.redirect("/#cards");
});

app.get("/atualizar/:id", (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.find((pokemon) => pokemon.id === id);
  res.redirect("/edit");
});

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  const newPokemon = req.body;
  newPokemon.id = id + 1;
  pokedex[id] = newPokemon;
  pokemon = undefined;
  mensagem = "Pokémon atualizado com sucesso!";
  res.redirect("/#cards");
});

app.get("/delete/:id", (req, res) => {
  const id = +req.params.id - 1;
  delete pokedex[id];
  res.redirect("/#cards");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);