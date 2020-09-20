let a = 3
global.b = 123

this.c = 456

console.log(a)
console.log(module.exports.a)
console.log(global.b)
console.log(this.c)
 //Não colocar variaveis em escopo global