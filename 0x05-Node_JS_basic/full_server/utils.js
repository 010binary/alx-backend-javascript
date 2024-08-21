import fs from "fs/promises";

export async function readDatabase(filepath) {
  try {
    const data = await fs.readFile(filepath, "utf-8");
    const parsedData = JSON.parse(data);

    const result = {};
    for (const fields in parsedData) {
      result[fields] = parsedData[fields].map((student) => student.firstname);
    }

    return result;
  } catch (e) {
    // console.error(e);
    return Promise.reject(e);
  }
}
