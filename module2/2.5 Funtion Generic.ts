{
    // Function with generic

    const createArray = (param: string): string[]=>{
        return [param];
    }

    createArray('Bangladesh')

    // we can make function dynamic with generic

const createArrayWithGeneric = <T>(param:T) : T[] =>{
    return [param];
}

createArrayWithGeneric<string>("Bangladesh");

type User = {id:number; name: string};

createArrayWithGeneric<User>({id:22, name:"Tanvir"});


// Tuple

const createArrayWithTuple = <T, Q>(param1:T, param2:Q) : [T,Q] =>{
    return [param1, param2];
}

createArrayWithTuple<number, string>(1, "Bangladesh");
createArrayWithTuple<number, {name:string}>(1, {name: "Bangladesh"});






}