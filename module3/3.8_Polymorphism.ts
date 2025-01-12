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

// pi * r * r
class Circle extends Shape{
radius: number;

constructor(radius: number){
    super();
    this.radius = radius;
}
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}


class Rectangle extends Shape{
height: number;
width: number;

constructor(height: number, width: number){
    super();
    this.height = height;
    this.width = width;
}
    getArea(): number {
        return this.height * this.width;
    }
}

const getShapeArea =(param : Shape)=>{
    console.log(param.getArea());
}

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Shape(10, 20);

getShapeArea(shape1)
getShapeArea(shape2)
getShapeArea(shape3)





}