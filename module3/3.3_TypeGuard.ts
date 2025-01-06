{
    // Type Guard - To check authentication

// Type of 

type Alphanumeric = string | number;

const add = (param1: Alphanumeric, param2: Alphanumeric):Alphanumeric=>{
    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2;
    }else{
        return param1.toString() + param2.toString();
    }
};
const result1 = add(2,5);
const result2 = add("3", "6");

console.log(result1);
console.log(result2);









}