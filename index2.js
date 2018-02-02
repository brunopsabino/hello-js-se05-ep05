//Criação de rotas para a tabela produto
const cfg = require("./knexfile")
const knex = require("knex")(cfg.development)
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()

app.use(morgan("dev"))

app.use(bodyParser.urlencoded())

app.use(express.static("public"))


app.get("/listprodutos", (req, res) => {
  knex("produto").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })  
})

app.post("/addproduto", (req, res) => {
  const novoproduto = req.body
  knex("produto").insert(novoproduto, "idcproduto").then(ret => {
      res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

knex.migrate.latest().then(_ => 
  app.listen(3000, _ => 
    console.log("server online!")))