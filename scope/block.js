const fruits = () =>{

    if(true){

        var fruitsOne = 'apple';//Scope del if, por ser var estara definida 
        //fuera de este scope, hasta el scope de la funcion
        let fruitsTwo = 'banana';//Scope del if, no estara definida fuera de este scope
        const fruitsThree = 'kiwi';//Scope del if, no estara definida fuera de este scope
    }
    console.log(fruitsOne);//apple
    console.log(fruitsTwo);//fruitsTwo is not defined
    console.log(fruitsThree);//fruitsThree is not defined
}

fruits();

//EJEMPLO 2

var x = 1;
{
    let x = 2;//Este let permitira que no se redeclare la variable global x
    //sino que se cree una variable que estara disponible para este bloque
    console.log(x)
}
console.log(x);

//EJEMPLO 3

const  anotherFunction = () =>{

    for(var i = 0; i < 10; i++){

        setTimeout(() =>{

            console.log(i);
        }, 1000)
    }
}

anotherFunction();/*Cuando declaro con var tendra un scope “function scope”
un scope de todo el bloque donde fueron declaradas, es decir del bloque contenedor
del bloque donde esta var. Mejor conocido como closure.
Entonces en cada iteracion del bucle, setTimeout apuntara a la misma variable i que
al finalizar el ciclo for sera 10.
Al usar let, a diferencia de var, hará que haya una i distinta para cada iteración 
del bucle y por esto setTimeout apuntara a una i distinta para cada iteración.

Nota: Todos las funciones callback de los timeout se ejecutan luego de terminar el
ciclo for que esta en callstack porque son agregadar a la pila de tareas(callback queue)
que se ejecuta al finalizar todas las tareas del callstack
*/