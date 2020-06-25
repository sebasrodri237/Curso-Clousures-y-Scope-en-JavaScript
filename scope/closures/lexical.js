const buildCount = (i) => {

    let count = i;
    const displayCount = () => {

        console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

//El closure puede ser reutilizado en diferentes partes y no se vera afectado
//el scope y el alcance
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();