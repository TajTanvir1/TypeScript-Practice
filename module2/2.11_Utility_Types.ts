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








}