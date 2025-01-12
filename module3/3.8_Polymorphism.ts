{
    // Polymorphism

    class Person{
        getSleep(){
            console.log("Sleep 8 hours");
        }
    }

    class Student extends Person{
        getSleep(){
            console.log("7 Hour")
        }
    }

    class Developer extends Person{
        getSleep(): void {
            console.log("6 Hours");
        }
    }

    const getSleepingHours =(param: Person)=>{
        param.getSleep()
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer()



getSleepingHours(person1);


class Shape {
    getArea(): number{
        return 0;
    }
}

class Circle extends Shape{
    getArea(radius : number): number {
        
    }
}



}