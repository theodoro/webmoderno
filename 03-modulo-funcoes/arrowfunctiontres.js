let compraComThis = function(param){
    console.log(this == param)
}

compraComThis(global) /* Window é usado como Global bo browser*/
//True
const obj = {}
compraComThis = compraComThis.bind(obj)
compraComThis(global) //False
compraComThis(obj) //True

let compraComThisArrow = param => console.log(this == param)
compraComThisArrow(global) //False
compraComThisArrow(this) //True