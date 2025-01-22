// -------------------------------------------
// ======================Problem 2:
// -------------------------------------------

// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// // Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// // Sample Output:
// [1, 2, 3, 4, 5]

{
    function removeDuplicates(array: number[]): number[]{
        const newArray : number[] = [];

        for(const arr of array){
            if(!newArray.includes(arr)){
                newArray.push(arr)
            }
        }
        // console.log(newArray);
        return newArray;
    }

    removeDuplicates([1, 2, 2, 3, 4, 4, 5,6,6]);
}
