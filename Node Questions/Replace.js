//Write a Node.js program that replaces the content of a file called "mynewfile3.txt" with the text "Hello content!" using the fs.writeFile() method.
const fs = require('fs');

const content = 'Hello content!\n';

fs.writeFile('mynewfile3.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Content replaced in file successfully!');
  }
});
