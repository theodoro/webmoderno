const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

const carro = {
    modelo: 'A3',
    valor: 80000,
    proprietario: {
        nome: 'Bruno',
        idade: 34,
        endereco: {
            logradouro: 'Rua X no Cicero',
            numero: 47
        }
    },
    condutores: [{
        nome: 'Sumara',
        idade: 36
    }, {
        nome: 'Bruno',
        idade: 34
    }],
    calcularValorSeguro: function(){
        //...
    }
}

