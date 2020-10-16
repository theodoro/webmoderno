//Usando anotação literal

const obj1 = {}
console.log(obj1)

//Object em Js
console.log(typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

//Funções construtoras

function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 -faltas)
        }
    }
}

const f1 = criarFuncionario('Bruno', 7000, 4)
const f2 = criarFuncionario('Sumara', 8999.98, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Um função famosa que retorna um Objeto...

const fromJSON = JSON.parse('{"Info": "Sou um JSON"}')
console.log(fromJSON.info)