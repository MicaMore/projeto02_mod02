const express = require("express");
const req = require("express/lib/request");
const { redirect } = require("express/lib/response");
const path = require("path");
const app = express();

const port = 3000;

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

//Rotas
app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
