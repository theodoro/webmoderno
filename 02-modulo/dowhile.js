function getInteiroAleatorioEntre(min, max) {

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1

do { /* Vai executar pelo menos uma unica vez */
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhidas foi ${opcao}.`)
} while (opcao != -1)
console.log('Até a próxima!')