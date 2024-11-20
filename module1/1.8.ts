{
    // Destructuring

    // Object Destructuring
const user={
    id:12,
    name:{
        firstName:"Tanvir",
        midName:"Ahamed",
        lastName: "Jubayer",
    },
    contactNo: "0140000000",
    address: "Bangladesh",
}

const {
    contactNo : number, //we cant declare types but can make alias like this
    name:{midName : middleName}, //alias
} =user;

// Array Destructuring

const name = ['channdler', 'joy', 'ross', 'rechel', 'monica'];

const [,,a,...rest] = name; //,, can skip index and ...rest destruc others values



}