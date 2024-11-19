{
    //

    // Basic Data Typs

    // String
    let name: string = "Tanvir"

    // Number
    let roll: number = 12

    // Boolean
    let inAdmin: boolean = true

    // Undefined
    let x: undefined = undefined

    // Null
    let y: null = null

    // if we do not set type in ts then its declared as any
    let d; //on hover we can see this data type in any

    d = 12;
    d = 'ddd'
    d = true

    // we can set any type in here but we should not do this

    // Array

    let friends: string[] = ['Pial', 'Salam'];
    let rollList : number[] = [1,2,3]

    // we can not set or push another types 
    // friends.push(5); //wrong type
    // rollList.push('A') //wrong type
    friends.push('A');
    rollList.push(5)


    // Tuple
    // Tuple is also array and can set types as index
    let nameAge : [string, number , boolean] = ["Tanvir", 26, true]





    //
}
