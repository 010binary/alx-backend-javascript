interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

const headerRow = document.createElement('tr');
const headerCell1 = document.createElement('th');
headerCell1.textContent = 'First Name';
const headerCell2 = document.createElement('th');
headerCell2.textContent = 'Location';

headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
thead.appendChild(headerRow);
table.appendChild(thead);

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.textContent = student.firstName;
    const cell2 = document.createElement('td');
    cell2.textContent = student.location;

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
