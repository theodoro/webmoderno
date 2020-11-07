const produto = Object.preventExtensions({
    nome: 'QUalquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha',
produto.descricao = 'Borracha Escolar'
delete produto.tag
console.log(produto)

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)