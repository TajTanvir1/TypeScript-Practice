{

    // type assertion
    // when we sure about type from multiple types we set assertion as -> as

    let anything : any;

    anything = "Next";

    anything =2;

    // (anything as number).
    // (anything as string).

    const kgToGm = (value: string | number) : number | string | undefined=>{
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value);
            return convertedValue;
        }else if(typeof value === 'number'){
            return value*1000;
        }
    }

    const result1 = kgToGm(1000) as number
    const result2 = kgToGm("1000") as string

    type CustomError = {
        massage: string
    }

    try {
        
    } catch (error) {
        console.log((error as CustomError).massage);
        
    }






}
