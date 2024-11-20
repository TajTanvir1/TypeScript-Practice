{
    // Type Alias

    type Student = {
        name: string;
        age:number;
        gender:string;
        contact:string;
    }

    const student : Student={
        name:"Mezba",
        age:30,
        gender: 'male',
        contact:"01239071928"

    }


    type UserName = string;

    const userName : UserName = 'Tanvir'



    type Add = (num1:number, num2:number)=>number;
    const add: Add = (num1, num2) => num1+num2;




}