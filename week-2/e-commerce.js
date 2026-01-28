// ================= ASSIGNMENT 1 =================
// Shopping Cart Summary

const cartItems = [
  { code: 101, itemName: "Laptop", unitPrice: 60000, quantity: 1, inStock: true },
  { code: 102, itemName: "Mouse", unitPrice: 800, quantity: 2, inStock: true },
  { code: 103, itemName: "Keyboard", unitPrice: 1500, quantity: 1, inStock: false },
  { code: 104, itemName: "Monitor", unitPrice: 12000, quantity: 1, inStock: true }
];

// filter() in-stock products
const inStockItems = cartItems.filter(product => product.inStock);
console.log(inStockItems);

// map() → { name, totalCost }
const costDetails = cartItems.map(product => ({
  name: product.itemName,
  totalCost: product.unitPrice * product.quantity
}));
console.log(costDetails);

// reduce() → grand total
const grandTotal = cartItems.reduce(
  (total, product) => total + product.unitPrice * product.quantity,
  0
);
console.log(grandTotal);

// find() Mouse
const mouseProduct = cartItems.find(product => product.itemName === "Mouse");
console.log(mouseProduct);

// findIndex() Keyboard
const keyboardIndex = cartItems.findIndex(product => product.itemName === "Keyboard");
console.log(keyboardIndex);



// ================= ASSIGNMENT 2 =================
// Student Performance Dashboard

const learners = [
  { rollNo: 1, studentName: "Ravi", score: 78 },
  { rollNo: 2, studentName: "Anjali", score: 92 },
  { rollNo: 3, studentName: "Kiran", score: 35 },
  { rollNo: 4, studentName: "Sneha", score: 88 },
  { rollNo: 5, studentName: "Arjun", score: 40 }
];

// filter() passed students
const qualifiedStudents = learners.filter(l => l.score >= 40);
console.log(qualifiedStudents);

// map() add grade
const evaluatedStudents = learners.map(l => {
  let grade =
    l.score >= 90 ? "A" :
    l.score >= 75 ? "B" :
    l.score >= 60 ? "C" : "D";
  return { ...l, grade };
});
console.log(evaluatedStudents);

// reduce() average marks
const averageScore =
  learners.reduce((sum, l) => sum + l.score, 0) /
  learners.length;
console.log(averageScore);

// find() marks 92
const topScorer = learners.find(l => l.score === 92);
console.log(topScorer);

// findIndex() Kiran
const kiranIndex = learners.findIndex(l => l.studentName === "Kiran");
console.log(kiranIndex);



// ================= ASSIGNMENT 3 =================
// Employee Payroll Processor

const employees = [
  { empId: 201, empName: "Amit", basePay: 45000, department: "IT" },
  { empId: 202, empName: "Neha", basePay: 60000, department: "HR" },
  { empId: 203, empName: "Rahul", basePay: 75000, department: "IT" },
  { empId: 204, empName: "Pooja", basePay: 30000, department: "Sales" }
];

// filter() IT department
const techTeam = employees.filter(emp => emp.department === "IT");
console.log(techTeam);

// map() add netSalary
const salarySheet = employees.map(emp => ({
  ...emp,
  netPay: emp.basePay * 1.1
}));
console.log(salarySheet);

// reduce() total payout
const salaryTotal = employees.reduce((total, emp) => total + emp.basePay, 0);
console.log(salaryTotal);

// find() salary 30000
const lowestPaidEmployee = employees.find(emp => emp.basePay === 30000);
console.log(lowestPaidEmployee);

// findIndex() Neha
const nehaIndex = employees.findIndex(emp => emp.empName === "Neha");
console.log(nehaIndex);



// ================= ASSIGNMENT 4 =================
// Movie Streaming Platform

const movies = [
  { movieId: 1, movieTitle: "Inception", category: "Sci-Fi", score: 8.8 },
  { movieId: 2, movieTitle: "Joker", category: "Drama", score: 8.4 },
  { movieId: 3, movieTitle: "Avengers", category: "Action", score: 8.0 },
  { movieId: 4, movieTitle: "Interstellar", category: "Sci-Fi", score: 8.6 }
];

// filter() Sci-Fi movies
const sciFiMovies = movies.filter(movie => movie.category === "Sci-Fi");
console.log(sciFiMovies);

// map() title with rating
const movieTags = movies.map(
  movie => `${movie.movieTitle} (${movie.score})`
);
console.log(movieTags);

// reduce() average rating
const averageRating =
  movies.reduce((total, movie) => total + movie.score, 0) /
  movies.length;
console.log(averageRating);

// find() Joker
const jokerMovie = movies.find(movie => movie.movieTitle === "Joker");
console.log(jokerMovie);

// findIndex() Avengers
const avengersIndex = movies.findIndex(movie => movie.movieTitle === "Avengers");
console.log(avengersIndex);



// ================= ASSIGNMENT 5 =================
// Bank Transaction Analyzer

const transactions = [
  { txnId: 1, txnType: "credit", txnAmount: 5000 },
  { txnId: 2, txnType: "debit", txnAmount: 2000 },
  { txnId: 3, txnType: "credit", txnAmount: 10000 },
  { txnId: 4, txnType: "debit", txnAmount: 3000 }
];

// filter() credit transactions
const creditTxns = transactions.filter(txn => txn.txnType === "credit");
console.log(creditTxns);

// map() amounts
const amountsList = transactions.map(txn => txn.txnAmount);
console.log(amountsList);

// reduce() final balance
const finalBalance = transactions.reduce((currentBal, txn) =>
  txn.txnType === "credit"
    ? currentBal + txn.txnAmount
    : currentBal - txn.txnAmount
, 0);
console.log(finalBalance);

// find() first debit
const firstDebit = transactions.find(txn => txn.txnType === "debit");
console.log(firstDebit);

// findIndex() amount 10000
const amountIndex = transactions.findIndex(txn => txn.txnAmount === 10000);
console.log(amountIndex);
