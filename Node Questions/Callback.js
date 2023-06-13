//Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum. The function should accept a callback function callback that receives the calculated sum. Invoke the callback function with the sum of the array elements.
function calculateSum(numbers, callback) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    callback(sum);
  }
  
  function callback(sum) {
    console.log('The sum is:', sum);
  }
  
  calculateSum([2, 4, 6, 8], callback);
  
