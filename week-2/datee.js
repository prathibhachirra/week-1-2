/*
Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss   */


                    
let date=new Date()
let year=date.getFullYear()
let month=date.getMonth()
let date1=date.getDate()
let hours=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()
let date4=new Date(Date.now())
let date2=new Date(2026,0,12)
console.log("year",year)
console.log("month",month)
console.log("date",date1)
console.log("hours",hours)
console.log("mintues",minutes)
console.log("seconds",seconds)
console.log(date4.toString())
console.log("human read",date2)






/*

Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");


Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
          */
let enrollmentDeadline = new Date("2026-01-20");
let today=new Date()
if(today<enrollmentDeadline)
{
    console.log("enrollment open")
}
else{
    console.log("enrollmentclosed")
}
let inputDate = "2026-02-30";
let userDate = new Date(inputDate);

// Validate date
if (
    userDate.getFullYear() === 2026 &&
    userDate.getMonth() === 1 &&  
    userDate.getDate() === 30
) {
    console.log("Valid date");
} else {
    console.log("Invalid date");
}



/*
Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years   */

let dob ='2005-12-23'
let birthday=new Date(dob)
let currentdate=new Date()
let currentage=currentdate.getFullYear()-birthday.getFullYear()
if(currentdate.getMonth()<birthday.getMonth() || currentdate.getMonth()==birthday.getMonth() && currentdate.getDate()<birthday.getDate()){
    currentage-=1;
}
console.log("current age is",currentage)
