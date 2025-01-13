{
    // Abstraction
    // Abstraction give us idea
    // Abstraction can use in 2 ways
    // 1. interface, 2. abstract

// Idea (abstract) with interface
    interface Vehicle1 {
        startEngine() : void;
        stopEngine() : void;
        move() : void;
    }

    // Real Implementation
    class Car implements Vehicle1{ //implement use in class
        startEngine(): void {
            console.log("Starting Engine");
        }
        stopEngine(): void {
            console.log("Stop Engine");
        }
        move(): void {
            console.log("Moving");
        }
        test(){
            console.log("Testing");
        }
    }












}