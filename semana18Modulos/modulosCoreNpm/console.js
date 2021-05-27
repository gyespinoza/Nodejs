/*var data =[
    {
        x:5,
        y:22
    },
    {
        x:50,
        y:30
    }
]

console.log(data)
console.table(data)*/

//console group
/*console.group('bloque')
console.log('Hola')
console.log('como')
console.log('estas')
console.groupEnd('bloque')*/

function bloque1(){
    console.group('bloque1')
    console.log('Elemento 1 bloque 1')
    console.log('Elemento 2 bloque 1')
    console.log('Elemento 3 bloque 1')
    bloque2()
    console.log('Elemento 4 bloque 1')
    console.groupEnd('bloque1')
}

function bloque2(){
    console.group('bloque2')
    console.log('Elemento 1 bloque 2')
    console.log('Elemento 2 bloque 2')
    console.log('Elemento 3 bloque 2')
    console.groupEnd('bloque2')
}

bloque1()