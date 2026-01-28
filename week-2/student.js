// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// filter() students who passed (marks ≥ 40)
let passed = students.filter(i => i.marks >= 40);
console.log("passed marks:", passed);

// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D
let grades = students.map(i => {
  if (i.marks >= 90) {
    i.grade = 'A';
  } else if (i.marks >= 75) {
    i.grade = 'B';
  } else if (i.marks >= 60) {
    i.grade = 'C';
  } else {
    i.grade = 'D';
  }
  return i;
});
console.log("students with grades:", grades); // map method will return the grades of the students

// reduce() to calculate average marks
let avergemarks = students.reduce((i, j) => i + j.marks, 0);
console.log("average marks of students:", avergemarks / students.length);

// find() the student who scored 92
let findstudent = students.find(i => i.marks == 92); // find method will return the first element that satisfies the condition
console.log("student who scored 92:", findstudent);

// findIndex() of student "Kiran"
let findindex = students.findIndex(i => i.name === "Kiran"); // return the index of the first element
console.log("index of student Kiran:", findindex);