export default class Car{
    minSpeed = 100
    constructor(name, price, model, color){
        this.name = name
        this.price = price
        this.model = model
        this.color = color
       }

      refuel() {
           console.log(this.name + ' car is refueled')
       }
       driven(){
           console.log(this.model + ' is driven')
       }
}

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

// const c1 = new Car("BMW", 100, "520", "red")
// console.log(c1.color)
// console.log(c1.name)
// console.log(c1.price)
// console.log(c1.model)
// c1.refuel()
// c1.driven()
// console.log('---------------------------')
// const c2 = new Car("Nissan", 500, "almera", "white")
// console.log(c2.color)
// console.log(c2.name)
// console.log(c2.price)
// console.log(c2.model)
// c2.refuel()
// c2.driven()


