const soma = function(x, y ){
    return x + y
}

const imprime = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprime(3, 4)
imprime(3, 4, soma)
imprime(3, 4, function(x,y){
    return x - y
})

imprime(3, 4, (x, y) => x * y)

const pessoa = {
    falar(){
        console.log('Opa')
    }
}

pessoa.falar()