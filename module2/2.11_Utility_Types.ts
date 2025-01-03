{
// Utility Types

// Pick
// Use to pick key of types

type Person ={
    name: string;
    age:number;
    email?: string;
    contactNo: string;
}

type NameAge =  Pick<Person, "name"|"age">




// Omit
// To use without selected key of types

type ContactInfo = Omit<Person,"name"|"age">
// we will get on hover ContactInfo others keys



// Required
// To make all keys required

type personRequired = Required<Person>



// Partial
// To use make optional all keys of type

type PersonPertial = Partial<Person>


// Readonly
// Use to write once and cant be changed

type PersonReadonly = Readonly<Person>

const person1 : PersonReadonly = {
    name: 'x',
    age: 50,
    contactNo: "243"
}
// person1.name='y'
// Cannot assign to 'name' because it is a read-only property.

// Record
// Use to define Dynamic key and types

type MyObj = Record<string, number> //first one for key type, second one for value

const obj : MyObj = {
    a: 2,
    b: 3,
    // c: "a" //value set number so if we want to add string type it will show error
}

// We can use Record type dynamically for objects
const DynamicObj : Record<string, unknown> = {
    // type Record<K extends keyof any, T> = { [P in K]: T; }
// Construct a type with a set of properties K of type T
    a: 2,
    b: 3,
    c: "a",
    d:true,
}







}