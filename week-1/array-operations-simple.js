// Assignment 1: Daily Temperature Analyzer

const weeklyTemperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() temperatures above 35
let extremeTemperatures = weeklyTemperatures.filter(temp => temp > 35);
console.log("Temperatures above 35:", extremeTemperatures);

// 2. map() Celsius → Fahrenheit
let tempsInFahrenheit = weeklyTemperatures.map(temp => (temp * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", tempsInFahrenheit);

// 3. reduce() to calculate average temperature
let temperatureSum = weeklyTemperatures.reduce((total, temp) => total + temp, 0);
let averageTemperature = temperatureSum / weeklyTemperatures.length;
console.log("Average Temperature:", averageTemperature);

// 4. find() first temperature above 40
let firstAboveForty = weeklyTemperatures.find(temp => temp > 40);
console.log("Temperature above 40:", firstAboveForty);

// 5. findIndex() of temperature 28
let positionOf28 = weeklyTemperatures.findIndex(temp => temp === 28);
console.log("Index of 28:", positionOf28);



// Assignment 2: Online Course Name Processor

const availableCourses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
let lengthyCourseNames = availableCourses.filter(course => course.length > 5);
console.log(lengthyCourseNames);

// 2. map() to uppercase
let capitalizedCourses = availableCourses.map(course => course.toUpperCase());
console.log(capitalizedCourses);

// 3. reduce() to single string
let combinedCourseNames = capitalizedCourses.reduce(
    (result, course) => result + " | " + course
);
console.log(combinedCourseNames);

// 4. find() the course "react"
let reactCourseName = availableCourses.find(course => course === "react");
console.log(reactCourseName);

// 5. findIndex() of "node"
let nodeCoursePosition = availableCourses.findIndex(course => course === "node");
console.log(nodeCoursePosition);



// Assignment 3: Student Marks List

const marksList = [78, 92, 35, 88, 40, 67];

// 1. filter() marks ≥ 40
let successfulMarks = marksList.filter(mark => mark >= 40);
console.log("Passed count:", successfulMarks.length);

// 2. map() add 5 grace marks
let updatedMarks = marksList.map(mark => mark + 5);
console.log("Grace Marks:", updatedMarks);

// 3. reduce() highest mark
let maximumScore = marksList.reduce(
    (currentMax, mark) => mark > currentMax ? mark : currentMax
);
console.log("Highest Mark:", maximumScore);

// 4. find() first mark below 40
let firstFailedScore = marksList.find(mark => mark < 40);
console.log("First failed mark:", firstFailedScore);

// 5. findIndex() of mark 92
let positionOf92 = marksList.findIndex(mark => mark === 92);
console.log("Index of 92:", positionOf92);
