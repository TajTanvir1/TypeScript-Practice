{
    // OOP - Inheritance

class Person {
    name : string;
    age: number;
    address: string;

    constructor(name: string, age:number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numOfHours:number){
        console.log(`${this.name} will sleep for ${numOfHours}`);
    }
}

class Student extends Person {
    constructor(name:string, age:number, address: string){
        super(name,age,address) //we need to use super method for initialized from another type
    }
}

const student1 = new Student("Mr. Student", 20, "UK");
// student1.

class Teacher extends Person{
    designation : string;

    constructor(name:string, age:number, address:string, designation:string){
        super(name, age, address);
        this.designation = designation; //when we add(define) more types we have to initialize
    }
    takeClass(numOfClass:number){
        console.log(`${this.name} will take ${numOfClass}`);
    }
}

const teacher = new Teacher("Mr. Teacher", 30, "Uk", "Professor");

// teacher. //we get all suggestion

}