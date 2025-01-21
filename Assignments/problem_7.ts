// -------------------------------------------
// ====================== Problem 7:
// -------------------------------------------

// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

// // Sample Input 1:
// const car = new Car("Honda", "Civic", 2018);
// car.getCarAge();

// // Sample Output 1:
// 6 (assuming current year is 2024)

{

    class Car {
    
        constructor(public make:string,public model:string,public year:number){}
        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            // console.log(currentYear - this.year);
            return currentYear - this.year;
        }
    }
    
    // const car = new Car("Honda", "Civic", 2018);
    // car.getCarAge();
    
}
