const fs = require('fs');

/**
 * Count the number of students in a database.
 * @param {string} path to the CSV file.
 */
const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();

    const rows = data.split('\n').filter(row => row);

    const headers = rows[0].split(',');
    const students = rows.slice(1).map(row => row.split(','));

    
    if (students.length === 0) {
      throw new Error('No students found in the database');
    }

    
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