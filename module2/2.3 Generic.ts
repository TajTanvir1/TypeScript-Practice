{

    // Generic type
    // generic type is used for declare dynamic types of Array

    // type GenericArray<params> = Array<params>;
    type GenericArray<T> = Array<T>;

    const rollNumbers: number[] = [3, 6, 8];
    const rollNumber1: GenericArray<number> = [3, 4, 5];

    const mentors: string[] = ['x', 'y'];
    const mentors1: GenericArray<string> = ['x', 'y'];

    const boolArray: boolean[] = [true, false];
    const boolArray2: GenericArray<boolean> = [true, false];


    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'Tanvir',
            age: 26,
        },
        {
            name: 'Pial',
            age: 25,
        }
    ]

    // Generic Tuple

    type GenericTuple<X,Y>= [X,Y];

    const manush : GenericTuple<number, {name: string}> = [12, {name: 'Tanvir'}]





}