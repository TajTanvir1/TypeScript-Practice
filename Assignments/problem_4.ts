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
    class Circle {
        constructor(public shape: "circle", public radius: number) { }
    }


    class Rectangle {
        constructor(public shape: "rectangle", public height: number, public width: number) { }
    }

    type Shape = Circle | Rectangle;

    const calculateShapeArea = (param: Shape) => {
        if(param.shape === "circle"){
           const Area = Math.PI * param.radius * param.radius
           console.log(Area)
           return Area
        } else if(param.shape === "rectangle"){
            const Area = param.height * param.width;
            console.log(Area)
            return Area;
        }
    }


    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });


}
