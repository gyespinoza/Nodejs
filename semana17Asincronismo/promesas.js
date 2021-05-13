//lo que se hara es que las funciones en lugar de ejecutar
//algo devolveran promesas
function asincrona(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola ', nombre);
            resolve(nombre); 
        },800
        );
     })
 }
 function adios(nombre){
     return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Adios ', nombre)
            //resolve(nombre)
            reject('Ocurrio un error')
        }, 1000
        )
     })
    
 }
 
 console.log('Iniciando proceso')
 asincrona('Jose')
    .then(adios) //como el parametro es el mismo, se puede llamar directamente ala funcion
    .then(adios)
    .then(adios)
    .then((nombre)=>console.log('Finalizando proceso'))
    .catch(error=>{
        console.error('Error: ');
        console.error(error);
    }
    )
    

//adios('Jose', function(){})