function trataErroELancar(erro){
    throw new Error('.....')
}

function imprimrNome(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!')
    }catch(e){
        trataErroELancar(e)
    }finally{
        console.log('Final')
    }
   

}

const obj = {nome: 'Bruno'} // Vai gerar erro, pois usamos nome e na verdade é name
imprimrNome(obj)