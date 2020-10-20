const pessoa = {
    nome: 'Sumara',
    idade: 36,
    peso: 60

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '03/12/1983'
})

pessoa.dataNascimento = '03/12/1983'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c  = 1234
console.log(obj)