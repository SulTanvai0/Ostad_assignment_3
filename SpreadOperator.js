//3) javascript Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


const mergeArrays = (no1, no2) => {

    const array = [...no1, ...no2]

    return array
}


console.log(mergeArrays(arr1, arr2));