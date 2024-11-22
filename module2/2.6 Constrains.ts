{
// Constrains
// set params need to have selected property

const addCourse = <T extends {id: number; name: string; email: string}>(student: T)=>{
    const course = "Next Level";
    return {
        ...student,
        course,
    }
}

const student1 = addCourse({
    id: 1,
    name: "Tanvir",
    email: "t@mail.com",
    devtype: "Next Level",
})










}