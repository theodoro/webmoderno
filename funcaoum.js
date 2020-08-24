function imprimirSoma(a ,b){
    console.log(a+b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Vai apresentar NaN, mas não dará erro
imprimirSoma(2, 4, 5, 7, 6) //Ignora os parametros a mais

function soma(a,b = 0){
    return a + b
}

console.log(soma(2,4))
console.log(soma(3)) // retorna 3, pois o valor de b é zero