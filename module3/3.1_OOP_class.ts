{
    // OOP - Object Oriented Program

    // Class

    class Animal {
        // name : string;
        // species: string;
        // sound: string;

        // we can use public to access publicly however it's work publicly

        // public name : string;
        // public species: string;
        // public sound: string;

        // constructor(name: string, species: string, sound:string){
        //     this.name = name;
        //     this.species = species;
        //     this.sound = sound;
        
        
        // parameter properties - public
        // when we add public modifier in constructor its define type and initial
        
        constructor(public name: string, public species: string, public sound:string){}

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }
        // Arrow function is not support this.x
    }


    const dog = new Animal("German Shepard", "Dog", "Ghew Ghew");
    const cat = new Animal("Persian", "Cat", "Meow Meow");

    dog.makeSound();
    cat.makeSound();

    // cat. //when we write a name and ' . ' we get suggestion of available methods











}