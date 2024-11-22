{
    //
    
    // Function in Typescript

    function add(num1:number, num2: number):number{
        return num1+num2
    }

    add(2,3)

    const addArrow = (num1:number=10, num2:number): number=> num1+num2;

    addArrow(23,2);
    

    // Object Function Method

    const User={
        name:"Tanvir",
        balance:0,
        addBalance(balance:number):number{
            return this.balance+balance;
        },
    }

    const arr : number[] = [1,4,10];
    const newArr: number[] = arr.map((elem:number):number => elem*elem);


    
    //
}
