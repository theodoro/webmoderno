function soBoaNoticia(nota){
    if(nota => 7){
        console.log('Aprovado' + nota)
    }else{
        console.log('Reprovado' + nota)
    }
}

soBoaNoticia(7)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null)