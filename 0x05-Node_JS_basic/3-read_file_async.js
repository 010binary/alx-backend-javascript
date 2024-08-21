const fs = require('fs').promises;

/**
 * Count the number of students in a database.
 * @param {string} path to the CSV file.
 */
async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');
    
    // Split data into rows by line breaks, filter out empty rows
    const rows = data.trim().split('\n').filter(row => row);

    // Extract the headers and students
    const headers = rows[0].split(',');
    const students = rows.slice(1).map(row => row.split(','));


    console.log(`Number of students: ${students.length}`);


    const fields = {};

    students.forEach(student => {
      const field = student[3];
      const firstName = student[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    
    for (const [field, firstNames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
    }
  } catch (error) {
    
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
