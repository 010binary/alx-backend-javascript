const express = require('express');
const fs = require('fs');

/**
 * Count the number of students in a database.
 * @param {string} database - Path to the CSV file.
 * @returns {Promise<Object>} The number of students in the database.
 */
const countStudents = (database) => new Promise((resolve, reject) => {
  fs.readFile(database, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const content = data.trim().split('\n');
      const students = content.slice(1).filter((line) => line !== '');
      const csStudents = [];
      const sweStudents = [];

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (field === 'CS') {
          csStudents.push(firstname);
        } else if (field === 'SWE') {
          sweStudents.push(firstname);
        }
      });

      const totalStudents = students.length;
      resolve({
        totalStudents,
        cs: { count: csStudents.length, list: csStudents },
        swe: { count: sweStudents.length, list: sweStudents },
      });
    }
  });
});

// Initialize the Express app
const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', (req, res) => {
  const database = process.argv[2];
  if (!database) {
    res.send('This is the list of our students\nCannot load the database');
    return;
  }

  countStudents(database)
    .then(({ totalStudents, cs, swe }) => {
      let response = `This is the list of our students\nNumber of students: ${totalStudents}\n`;
      response += `Number of students in CS: ${cs.count}. List: ${cs.list.join(', ')}\n`;
      response += `Number of students in SWE: ${swe.count}. List: ${swe.list.join(', ')}`;
      res.send(response);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
