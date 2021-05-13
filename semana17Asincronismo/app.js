/*
EVENTLOOP.... es parte de la implementacion del motor de javascript
Decide cuando y en que orden se ejecutan las funciones
*/

function asincrona(nombre, callback){
   setTimeout(function(){
        console.log('Hola ', nombre);
        callback(nombre); //aqui se tiene acceso a la variable
    },800
   );
}
function adios(nombre, callback1){
    setTimeout(function(){
        console.log('Adios ', nombre)
        callback1()
    }, 1000
    )
}


//llamado a la funcion
//cuando se llama una funcion dentro de otra funcion asincrona se ejecuta una seguida de la otra
//si no inicia una funcion dentro de otra se ejecuta en el tiempo que deba ejecutarse
asincrona('Jose',function(nombre){  //la variable nombre la dara el callback
    adios(nombre, function(){
        console.log('Finalizando proceso')
    })    
})
