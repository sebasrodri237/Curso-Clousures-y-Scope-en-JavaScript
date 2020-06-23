//Estas variables estan asignadas de forma Global y estan definidas para todo
//el codigo/ contexto
var hello = 'Hello';
//Con var puedo reasignar una variable, aunque sea una mala practica
let world = 'Hello World';
//Con let no puedo reasignar una variable
const helloWorld = 'Hello World';
//Con const no puedo reasignar una variable

const anotherFunction = () =>{

    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();


