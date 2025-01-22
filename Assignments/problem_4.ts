// -------------------------------------------
// ======================== Problem 4:
// -------------------------------------------

// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// // Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// // Sample Output 1:
// 78.54;

// // Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// // Sample Output 2:
// 24;


{

    class Shape {
        getArea(): number {
            return 0;
        }
    }

    // Circle Area - pi * r * r
    class Circle extends Shape {
        radius: number;

        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }


    class Rectangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width;
        }
    }

    const calculateShapeArea = (param: Shape) => {
        console.log(param.getArea());
        return param.getArea();
    }

    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(10, 20);

    // const rectangleArea = calculateShapeArea({
    //       shape: "rectangle",
    //       width: 4,
    //       height: 6,
    //     });

        // const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });


        calculateShapeArea(shape1)
        calculateShapeArea(shape2)
        calculateShapeArea(shape3)

    }
