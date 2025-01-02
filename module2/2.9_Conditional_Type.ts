{
    // Conditional Type

    // type a1 = null;
    type a1 = number;
    // type b1 = undefined;
    type b1 = string;

type x = a1 extends null ? true: false; 
type y = a1 extends null ? true : b1 extends undefined ? undefined: any;


type Sheikh = {
    bike: string;
    car: string;
    ship: string;
}

// keyof Sheikh - "bike" | "car" | "ship"

// Checking Which vehicle has
type CheckVehicle<T> = T extends keyof Sheikh ? true: false;

type HasBike = CheckVehicle<"bike">
type HasCar = CheckVehicle<"car">
type HasPlane = CheckVehicle<"plane"> //False




}