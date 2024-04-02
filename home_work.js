
/* 1.Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.*/

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            sum += arr[i];
        }
    }
    return sum;
}

/*2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.
*/
const getNewArray = function(arr) {
    return arr.filter(str => str.length >= 5 && str.includes('a'));
};

/*3. Implement an arrow function with feature below
concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']*/ 
const concat = (...args) => {
    return args.reduce((acc, val) => {
        if (typeof val === 'string') {
            acc.push(...val.split(''));
        } else {
            acc.push(...val);
        }
        return acc;
    }, []);
};

// Test cases
console.log(sum([10, 25, 30, 15])); 
console.log(getNewArray(['abebe', 'hanna', 'hellon', 'hiwot', 'Arkan','eleni'])); 
console.log(concat('hi', [1, 2, 3], ['Hello', 'world']));
