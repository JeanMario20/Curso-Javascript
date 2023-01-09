let valor_ini = 10
let valor_decre = 10

while(true){
    valor_ini = valor_ini * valor_decre
    valor_decre --
    console.log(valor_ini)
    if(valor_decre === 0){
        console.log('el valor es de:' + valor_ini)
        break
    }
}