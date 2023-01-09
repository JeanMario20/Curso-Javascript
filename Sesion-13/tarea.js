//secuencia fubonacci

let val1 = 0
let val2 = 1
let temp = 0
function fubonacci(num) {
    for (let i = 1; i => num; i++) {
    temp = val1 
    val1 = val2
    val2 = val1 + temp 
    console.log(val2)
    }
}

console.log(fubonacci(5))