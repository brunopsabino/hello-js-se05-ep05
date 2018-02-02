const cfg = require("./knexfile")
const knex = require("knex")(cfg.development)
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const app = express()

app.use(morgan("dev"))

app.use(bodyParser.urlencoded())

app.use(express.static("public"))
app.use(express.static("public/css"))


app.get("/listcontatos", (req, res) => {
  knex("contato").select().then(ret => {
    res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })  
})

app.post("/addcontato", (req, res) => {
  const novocontato = req.body
  knex("contato").insert(novocontato, "idcontato").then(ret => {
      res.send(ret)
  }).catch(err => {
    res.status(500).send(err)
    console.log(err)
  })
})

knex.migrate.latest().then(_ => 
  app.listen(3000, _ => 
    console.log("server online!")))