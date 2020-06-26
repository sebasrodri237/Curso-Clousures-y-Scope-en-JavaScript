var a = 'Hello';

function hello() {
    
    let b = 'Hello World';
    const c = 'Hello World!';

    if(true){

        let d = 'Hello World!!!';
        debugger// Observamos el comportamiento del codigo hasta este punto como
        //scope, this, valores .. etc
        //Este codigo se corre en la consola del navegador directamente no aqui
    }
}

hello();

//Utilizando el debugger en closure
const moneyBox = () =>{
    debugger
    var saveCoins = 0;
    //Inicio estructura de closure(funcion dentro de otra funcion)
    const countCoins = (coins) =>{
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
    //Fin estructura de closure
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);