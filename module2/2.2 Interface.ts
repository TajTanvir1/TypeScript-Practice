{
    // Interface
    // interface usually used to declare types for object

    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    }

    type RollNo = number;
    // we can write type alias with type but cannot with interface cause interface start without ' = '

    // with type
    const user1: User1 = {
        name: "Tanvir",
        age: 26
    }

    // with interface (no difference)
    const user2: User2 = {
        name: "Tanvir",
        age: 26
    }

// Intersection

type UserWithRole1 = User1 & {role:string};

interface UserWithRole2 extends User2 {role:string};


// Array

type Roll1 = number[];

interface Roll2 {
    [index: number] : number
}

const rollNumber1 : Roll1 = [1,2,3];
const rollNumber2 : Roll2 = [1,2,3];

type Add = (num1: number, num2: number) => number;
interface Add2 {
    (num1: number, num2:number) : number
}

const add : Add = (num1, num2) => num1+num2;
const add2 : Add2 = (num1, num2) => num1+num2;









}