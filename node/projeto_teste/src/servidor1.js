const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados1')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})


app.listen(porta, () => {
    console.log('executando na porta 3003')
})
