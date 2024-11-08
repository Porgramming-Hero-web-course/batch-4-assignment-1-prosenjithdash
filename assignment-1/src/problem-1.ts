{

// PROBLEM 1 --_> Answer --->
    function sumArray(numbers:number[]):number {
       
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum;
        
    }

    //  const result = sumArray([1, 2, 3, 4, 5]);
    // console.log(result);


}