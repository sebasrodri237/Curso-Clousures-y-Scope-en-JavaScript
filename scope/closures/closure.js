const moneyBox = (coins) =>{

    var saveCoins = 0;

    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

//En este ejemplo no se guarda el valor

//EJEMPLO 2 con closure

const moneyBox = () =>{

    var saveCoins = 0;
    //Inicio estructura de closure(funcion dentro de otra funcion)
    const countCoins = (coins) =>{

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