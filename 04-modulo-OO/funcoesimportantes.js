const pessoa = {
    nome: 'Sumara',
    idade: 2,
    peso: 60
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true,
    writable: false,
    value: '01/01/2020'
})

pessoa.dataNasc = '01/01/2021'
console.log(pessoa.dataNasc)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234

console.log(obj)
