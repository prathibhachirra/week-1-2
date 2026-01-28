
//Initial data:
let totalAmount = 0;
//Tasks
totalAmount+=500;            //1. Add ₹500 to the total
totalAmount+=1200;           //2. Add ₹1200 to the total
totalAmount-=200;             //3. Apply a ₹200 discount
let GST=totalAmount*0.18;      // 4. Add 18% GST
totalAmount=totalAmount+GST;
// 5. Print the final bill amount 
console.log("Finall bill amount:",totalAmount)
