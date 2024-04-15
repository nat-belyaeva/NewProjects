class Animal {
    constructor(name, eyes) {
        this.name = name
        this.eyes = eyes
    }

    getName() {
        return (`The animal name is ${this.name}`)
    }
    canEat(){
        console.log(this.name + ' can eat')
    }
    canBreed(){
        console.log(this.name + ' can breed')
    }
    canBreath(){
        console.log(this.name + ' can breath')
    }
}

export class Mammals extends Animal {
    constructor(name, eyes, skin, legs, claws) {
        super(name, eyes)
        this.skin = skin
        this.legs = legs
        this.claws = claws
    }

    canEat() {
        console.log(this.name + ' can eat meat')
    }

    hasBodyPart() {
        console.log(`${this.name} has 4 legs and ${this.claws} and ${this.skin}`)
    }
}