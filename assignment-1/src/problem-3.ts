{
   
    // // Problem 3: Answer -->
    
    function countWordOccurrences(sentence:string,word:string):number {
        let words = sentence.toLowerCase();
        let spiltWords = words.split(' ');

        let findingWord = word.toLowerCase();

        return spiltWords.filter(t => t === findingWord).length;



    }
    // console.log(countWordOccurrences("I love typescript", "typescript"))

}