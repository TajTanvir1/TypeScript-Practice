{
    // Mapped Types

    const arrOfNum: number[] = [1,3,5];
    
    const arrOfStrings: string[] = arrOfNum.map(num => num.toString());
    console.log(arrOfStrings);


type AreaNumber = {
    height: number;
    width: number;
}

// keyof AreaNumber = "height" | "width"

type AreaString = {
    [key in keyof AreaNumber] : string
}





}