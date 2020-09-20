{{{{var sera = 'será?'}}}}
console.log(sera)
//variavel var fica visivel fora do bloco

function teste(){
    var local = 123;
    console.log(local)
}
teste()
//console.log(local) apresentará um erro, pois a local só está visivel dentro da função