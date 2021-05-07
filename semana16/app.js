/*const name='Andrea'
const age='22'

console.log('Bienvenida %s, tienes %d años', name, age)*/

/*
process.argv.forEach((index, val)=>{ //obtendra el inidice y el valor
    console.log(`${val}: ${index}`)
}
)*/

//obtener solo argumentos adicionales, mediante una matriz en la cual se excluyan los primeros 2 parametros
//const args= process.argv.slice(2)
//console.log(args[0])

//entrada de datos
/*const name = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

//question()
name.question(`Cual es tu nombre?`, nombre =>{
    console.log(`Bienvenid@ ${nombre}`)
    name.close()
})*/

const {colors, val} = require("./colors")

colors.forEach((color) =>{
    console.count(color)
})

console.log("El valor de val en script colors es: ", val)