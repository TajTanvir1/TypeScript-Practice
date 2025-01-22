// -------------------------------------------
// ================== Problem 3:
// -------------------------------------------

// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1
// // Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// // Sample Output:
// 1;

{
    function countWordOccurrences(sentence: string, word : string):number{
        const wordCase = word.toLowerCase();
        const sentenceArray : string[] = sentence.toLowerCase().split(" ");

        let countWord: number = 0;
        for(const sentenceArr of sentenceArray){
            if(sentenceArr == wordCase){
                countWord++
            }
        }
        console.log(countWord)
        return countWord;
    }

    countWordOccurrences("I love typescript typescript", "typescript");
}
