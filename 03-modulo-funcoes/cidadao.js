// criar função de forma literal

function fun1(){

}

// Armazenar em uma variavel 

const fun2 = function(){

}

// Armazenar função dentro de um array

const array = [function(a, b){
    return  a + b
}, fun1, fun2]
console.log(array[0](2, 3))

// Armazernar em objetos

const obj = {

}
obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

// Passar função com parametros
function run(fun){
    fun()
}
run(function() {console.log('Executando ...')})

// Uma funçaõ pode retornar(conter um função)

function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(3, 4)(4)