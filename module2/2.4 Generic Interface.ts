{
    // Generic with interface

    interface Developer<T,X = null>{
        name:string;
        computer:{
            brand: string;
            model:string;
        }
        smartwatch: T;
        bike?:X;
    }

    interface SmartWatch {
        brand: string;
        model: string;
    }

    const developer : Developer<SmartWatch>={
        name: "Tanvir",
        computer:{
            brand: "aser",
            model: "Aspire",
        },
        smartwatch: {
            brand: "Something",
            model: "Something",
        }
    }






}