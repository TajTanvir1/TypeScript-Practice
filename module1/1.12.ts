{
// Nullable types || unknown

const searchName = (value: string | null) =>{
    if(value){
        console.log("Searching");
    }
    else{
        console.log("Nothing to search");
    }
}
searchName(null);

// unknown typeof







}