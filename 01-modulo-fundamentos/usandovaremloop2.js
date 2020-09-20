const funcs = []

for (var i = 0; i < 10; i++){

    funcs.push(function(){
        console.log(i)
    })

}
/* Vai imprimir sempre 10 */
funcs[2]()
funcs[8]()