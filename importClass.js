import Car from "./classes.js";
class Audi extends Car{
    minSpeed = 200
    //overriding methods
    refuel() {
        console.log( 'Audi car is refueled')
    }


}
const audi = new Audi()
audi.refuel()
console.log(audi.minSpeed)