const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad PRO', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copa de Plastico', preco: 18.99, fragil: false}
]

console.log(produto.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))