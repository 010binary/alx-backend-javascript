const http = require("http");
const url = require("url");
const fs = require("fs").promises;

/**
 * Count the number of students in a database.
 * @param {string} path to the CSV file.
 * @returns {Promise<string>} The number of students in the database.
 */
const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, "utf8");
    const rows = data
      .trim()
      .split("\n")
      .filter((row) => row);

    const students = rows.slice(1).map((row) => row.split(","));

    let response = `Number of students: ${students.length}\n`;

    const fields = {};

    students.forEach((student) => {
      const field = student[3];
      const firstName = student[0];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    for (const [field, firstNames] of Object.entries(fields)) {
      response += `Number of students in ${field}: ${
        firstNames.length
      }. List: ${firstNames.join(", ")}\n`;
    }

    return response.trim();
  } catch (error) {
    throw new Error("Cannot load the database");
  }
};

const app = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Holberton School!");
  } else if (reqUrl.pathname === "/students") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the list of our students\n");

    try {
      const databasePath = process.argv[2];
      const studentData = await countStudents(databasePath);
      res.end(studentData);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

app.listen(1245);

module.exports = app;
