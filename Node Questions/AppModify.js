//Modify the previous program to create a new file called "mynewfile2.txt" using the fs.open() method with the "w" flag.

const fs = require('fs');

const content = 'Hello content!\n';

fs.open('mynewfile2.txt', 'w', (err, file) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    fs.writeFile(file, content, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Content written to file successfully!');
      }
    });
  }
});
