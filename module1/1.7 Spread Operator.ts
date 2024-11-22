{
    // Spread Operator
    // Destructuring

    const bros1:string[]=["Mir", "Firoz", "Mizan"];
    const bros2:string[] = ['Tonmoy', 'Nahid', 'Rahat'];

    // bros1.push(bros2); //Argument of type 'string[]' is not assignable to parameter of type 'string'
    bros1.push(...bros2);


    const mentor ={ //Auto Selected Types
        type: 'Mezba',
        redux:'Mir',
        dbms:'Mizan'
    }
    const mentor2={ //Auto Selected Types
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    }
    const mentorList = { 
        ...mentor,
        ...mentor2
    } 


    // Rest Operator
    const greetFriends = (...friends:string[])=>{
        // console.log(`Hi ${frind1, friend2}`)

        friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
    };

    greetFriends("Abul", "Babul", "Labul")
}
