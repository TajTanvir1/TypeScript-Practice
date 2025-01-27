{
    // Abstraction
    // Abstraction give us idea to implementation
    // Abstraction can use in 2 ways
    // 1. interface, 2. abstract

    // Idea (abstract) with interface
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // Real Implementation
    class Car implements Vehicle1 { //implement use in class to get value of abstract interface
        startEngine(): void {
            console.log("Starting Engine");
        }
        stopEngine(): void {
            console.log("Stop Engine");
        }
        move(): void {
            console.log("Moving");
        }
        test() {
            console.log("Testing");
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine();



    // 2. Abstract

    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log("Testing");
        }
    }

    class ToyotaCar2 extends Car2{
        startEngine(): void {
            console.log("Starting Engine");
        }
        stopEngine(): void {
            console.log("Stop Engine");
        }
        move(): void {
            console.log("Moving");
        }
    }





}