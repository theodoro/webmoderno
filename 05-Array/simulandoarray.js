const quaseArray = {0: 'Sumara', 1: 'Bruno', 2: 'Pietra'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['Sumara', 'Bruno', 'Pietra']
console.log(quaseArray.toString(), meuArray)