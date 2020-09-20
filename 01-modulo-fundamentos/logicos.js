function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2
    const compraTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete

return{ compraTV50, compraSorvete, comprarTV32,manterSaudavel }

}
console.log(compras(true,true))