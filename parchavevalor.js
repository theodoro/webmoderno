// par nome/valor
const saudacao = "Opa" //contexto léxito

function exec(){

    const saudacao = 'Falaaa'
    return saudacao
} 

// Objetos são grupos alinhados de pares nome /valor

const cliente = {

    nome: 'Pedro',
    idade: 30,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
