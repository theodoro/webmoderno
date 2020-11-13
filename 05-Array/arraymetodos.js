const pilotos = ['Hamilton', 'Vettel','Alonso','Massa']
pilotos.pop()

console.log(pilotos)

pilotos.push('Raikone')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro elemento
console.log(pilotos)

pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3,1) //remover o elemento do indice três
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
