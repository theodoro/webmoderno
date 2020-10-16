
// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

//Daqui para frente não consigo mais mexer no objeto
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)