{
// Ternary Operator || Optional chaining || nullish coalescing

const age: number = 18;

if(age >= 18){
    // console.log("Adult");
} else{
    console.log("Not Adult");
}

const isAdult = age>= 18? "adult" : "not adult";
// console.log(isAdult);

// Nullish coalescing operator -- ' ?? '
// use to decision make for -> null / undefined

const isAuthenticated = null;
const isAuthenticated2 = undefined;

const result1 = isAuthenticated ?? "Guest";
const result2 = isAuthenticated2 ?? "Guest";
// console.log({result1}, {result2});


type User = {
    name: string;
    address: {
        city: string;
        presentAddress: string;
        permanentAddress?: string;
    }
}

const user: User = {
    name: "Parsian",
    address:{
        city: "Dk",
        presentAddress: "Dk"
    }
}

const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
console.log({permanentAddress});







}