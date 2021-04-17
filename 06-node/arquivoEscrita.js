const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1455.99,
    desconto: 0.14
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo')
})