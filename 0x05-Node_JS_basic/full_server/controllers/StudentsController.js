import { readDatabase } from "../utils.js";

class StudentsController {
  // Method to get all students
  static async getAllStudents(request, response) {
    try {
      const studentsData = await readDatabase("path/to/database.json");

      // Sort fields alphabetically (case insensitive)
      const sortedFields = Object.keys(studentsData).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      let result = "This is the list of our students\n";

      sortedFields.forEach((field) => {
        const listOfNames = studentsData[field].join(", ");
        result += `Number of students in ${field}: ${studentsData[field].length}. List: ${listOfNames}\n`;
      });

      response.status(200).send(result.trim());
    } catch (error) {
      response.status(500).send("Cannot load the database");
    }
  }

  // Method to get all students by major (CS or SWE)
  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    // Validate the major parameter
    if (major !== "CS" && major !== "SWE") {
      return response.status(500).send("Major parameter must be CS or SWE");
    }

    try {
      const studentsData = await readDatabase("path/to/database.json");
      const listOfNames = studentsData[major]?.join(", ");

      if (!listOfNames) {
        return response.status(200).send(`List: No students in ${major}`);
      }

      response.status(200).send(`List: ${listOfNames}`);
    } catch (error) {
      response.status(500).send("Cannot load the database");
    }
  }
}

export default StudentsController;
