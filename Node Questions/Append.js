//Create a Node.js program that appends the text "Hello content!" to a file called "mynewfile1.txt" using the fs.appendFile() method
const fs = require('fs');

const content = 'Hello content!\n';

fs.appendFile('mynewfile1.txt', content, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Content appended to file successfully!');
  }
});
