const porta = 3003 //Uma porta 

const express = require('express')
const app = express()
//const bodyParset = require('body-parset')
const bancoDeDados = require('./bancodedados')

app.use(bodyParset.urlencoded({ extends: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
}) 

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`)
})