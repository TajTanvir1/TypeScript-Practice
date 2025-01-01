{
    // generic constraint with keyof operator

    type Vehicle ={
        bike:string;
        car:string;
        ship:string
    }

    type Owner = "bike" | "car" | "ship"; //manually entry

    type Owner2 = keyof Vehicle;

    // we can get suggestion from keyof and also from manual
    const person : Owner = "bike"
    const person1 : Owner2 = "bike"

    // We can get objects key in suggestion by this
const getPropertyValue =<X, Y extends keyof X> (obj:X, key:Y)=>{
    return obj[key];
}

const user = {
    name: "T",
    age: 26,
    address: "dhk"
}

const result = getPropertyValue(user, "age");
// When we set object name we can get suggestion of keys






}