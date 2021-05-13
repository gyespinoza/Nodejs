async function asincrona(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola ', nombre);
            resolve(nombre); 
        },800
        );
     })
 }
 async function adios(nombre){
     return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Adios ', nombre)
            resolve(nombre)
            //reject('Ocurrio un error')
        }, 1000
        )
     })
    
 }
 
 console.log('Iniciando proceso')
 async function ejecutar(){
    let nombre = await asincrona('Jose')
    await asincrona('Jose')
    await asincrona('Jose')
    asincrona('Jose')
    await adios(nombre)
    console.log('Finalizando proceso')
 }

 ejecutar()