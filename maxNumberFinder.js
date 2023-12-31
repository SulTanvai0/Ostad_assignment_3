// 2) javascript function returns

const numbers1 = [10, 20, 5, 30, 25];
const numbers2 = [5, 15, 7];
const emptyArray = [];

function findMaxNumber(numbers) {
    if (numbers.length === 0) {
      return null;
    }
  
    let maxNumber = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
  
    return maxNumber;
  }
  
console.log(findMaxNumber(numbers1)); 