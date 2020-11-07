class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addLancamentos(...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Luz', -250)

const conta = new CicloFinanceiro(7, 2020)
conta.addLancamentos(salario, contaLuz)

console.log(conta.sumario())