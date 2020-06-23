const helloWorld = () =>{

    //Esta variable solo esta definida/existe en esta funcion o bloque de codigo
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
console.log(hello);

var  scope = "I am global";

const functionScope = () =>{

    var scope = "i am local";
    const func = () =>{
        return scope;
    }
    console.log(func());
}

functionScope();