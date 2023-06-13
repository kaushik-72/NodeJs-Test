//Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. Implement a promise that resolves with the generated random number. The promise should be rejected if the generated number is less than 5.
function getRandomNumber() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
  
      if (randomNumber >= 5) {
        resolve(randomNumber);
      } else {
        reject(new Error('Generated number is less than 5'));
      }
    });
  }
  
  getRandomNumber()
    .then((number) => {
      console.log('Resolved:', number);
    })
    .catch((error) => {
      console.log('Rejected:', error.message);
    });
  
