{
    // Mapped Types

    const arrOfNum: number[] = [1,3,5];
    
    const arrOfStrings: string[] = arrOfNum.map(num => num.toString());
    console.log(arrOfStrings);


type AreaNumber = {
    height: number;
    width: number;
}

type Height = AreaNumber["height"] //Lookup type

// keyof AreaNumber = "height" | "width"

type AreaString = {
    [key in keyof AreaNumber] : string
}

{

    // T => {height:string}
    // key => T["height"] | T["width"]

    type AreaString <T> = {
        [key in keyof T]: T[key];
    };

// when we need to set multi types dynamically we use loop by [key]

    const area: AreaString<{height: string; width:number}>={
        height: '100',
        width: 50,
    }



}



}