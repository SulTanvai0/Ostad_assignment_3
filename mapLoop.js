// 5) javascript es6 map 

const doubleNumbers  = (numbers) =>{
   
    const doubleNums  = numbers.map(number => number + number);
    return doubleNums ;

}

const numbers = [1, 2, 3, 4, 5];


console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]