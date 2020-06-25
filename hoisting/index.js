a = 2;

var a;

console.log(a);//2
//Debido al hoisting se eleva la declaracion en el momento de compilar
//antes de ser ejecutado el codigo


console.log(a);//undefined
//Debido al hoisting se eleva la declaracion y es inicializada con undefined 
//solo las variables con var 
var a = 2;


nameOfDog('Dogger');

function nameOfDog(name) {
    console.log(name);
}
//Debido al hoisting se eleva toda la funcion al inicio del scope y es 
//posible hacer el llamado a esta
