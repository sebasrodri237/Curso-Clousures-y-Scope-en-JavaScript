const person = () => {

    var saveName = "Name";
    //Hacemos este closure para proteger esta variable y que no sea accedida
    //fuera de esta funcion, sera como una variable privada
    return {//Crear metodos
        
        getName: () => {
        // Metodo para obtener el nombre guardado    
            return saveName;
        },
        setName: (name) => {
        // Metodo que asigna el nombre que le enviemos
            saveName = name;
        }        
    }
}//Como trabajar con POO, creamos un constructor y entregamos lo metodos publicos

let newPerson = person();

console.log(newPerson.getName());
newPerson.setName('Sebastian');
console.log(newPerson.getName());