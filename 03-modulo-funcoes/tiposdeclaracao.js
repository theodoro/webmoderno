// Function declaration
console.log(soma(3, 4)) //É possivel usar ela antes , pois o interpretador js carrega antes
function soma(x, y){
    return x + y
}

//Function expression
//Nesse caso só posso chamar depois da função declarada
const sub = function(x,y){
    return x - y
}

//named function expression

const mult = function mult(x,y){
    return x * y
}