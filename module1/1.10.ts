{
    // Union Type |

type FrontendDeveloper = 'Fakibaz' | 'JuniorDev';
type FullStackDev = 'frontend Dev' | 'expert Dev';

type Developer = FrontendDeveloper | FullStackDev;

const dev :FrontendDeveloper = 'Fakibaz';

type User = {
    name: string;
    email?: string;
    gender: 'male' | 'female';
    bloodGroup: 'A+' | 'B+' | 'AB+';
}


const user1 : User={
    name: 'Tanvir',
    email: 't@gmail.com',
    bloodGroup: "B+",
    gender: "male"

}





}