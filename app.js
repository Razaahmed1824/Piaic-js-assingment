// ////long version
// function calculate() {
//   const a = parent(document.getElementById("bookone").value);
//   const b = parent(document.getElementById("booktwo").value);
//   const c = parent(document.getElementById("bookthree").value);
//   const d = parent(document.getElementById("bookfour").value);
//   const e = parent(document.getElementById("bookfive").value);
//   if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
//     alert("please enter correct value");
//   } else {
//     const obtain = a + b + c + d + e;
//     document.getElementById("obtain").innerHTML = obtain;
//     const per = (obtain / 500) * 100;
//     document.getElementById("per").innerHTML = per;
//     if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40) {
//       document.getElementById("remarks").innerHTML = "pass";
//     } else {
//       document.getElementById("remarks").innerHTML = "fail";
//     }
//     if (per >= 80) {
//       document.getElementById("grade").textContent = "A";
//     } else if (per >= 70) {
//       document.getElementById("grade").textContent = "B";
//     }
//     if (per >= 60) {
//       document.getElementById("grade").textContent = "C";
//     }
//     if (per >= 50) {
//       document.getElementById("grade").textContent = "D";
//     }
//     if (per >= 40) {
//       document.getElementById("grade").textContent = "E";
//     } else {
//       document.getElementById("grade").textContent = "f";
//     }
//   }
// }

// /// short version
// function calculate() {
//   const marks = ["bookone", "booktwo", "bookthree", "bookfour", "bookfive"].map(
//     (book) => parent(document.getElementById(book).value)
//   );
//   if (marks.some((mark) => mark > 100)) {
//     alert("Please enter correct value");
//     return;
//   }
//   const obtain = marks.reduce((acc, curr) => acc + curr, 0);
//   document.getElementById("obtain").innerHTML = obtain;
//   const per = (obtain / 500) * 100;
//   document.getElementById("per").innerHTML = per;
//   document.getElementById("remarks").innerHTML = marks.every(
//     (mark) => mark >= 40
//   )
//     ? "pass"
//     : "fail";
//   const grades = ["F", "E", "D", "C", "B", "A"];
//   const grade = grades[Math.floor(per / 10) - 4];
//   document.getElementById("grade").textContent = grade;
// }

// ////shortest version

// function calculate() {
//   const marks = ["bookone", "booktwo", "bookthree", "bookfour", "bookfive"].map(
//     (book) => parent(document.getElementById(book).value)
//   );
//   if (marks.some((mark) => mark > 100))
//     return alert("Please enter correct value");
//   document.getElementById("obtain").innerHTML = marks.reduce(
//     (acc, curr) => acc + curr,
//     0
//   );
//   const per = (marks.reduce((acc, curr) => acc + curr, 0) / 500) * 100;
//   document.getElementById("per").innerHTML = per;
//   document.getElementById("remarks").innerHTML = marks.every(
//     (mark) => mark >= 40
//   )
//     ? "pass"
//     : "fail";
//   document.getElementById("grade").textContent = ["F", "E", "D", "C", "B", "A"][
//     Math.floor(per / 10) - 4
//   ];
// }

// // 1,2,3 chapter assignment start

// let firstName = "raza";
// let lastName = "ahmed";
// let age = 20;
// alert("Hello" + " " + firstName + " " + lastName + " " + age);

// // 1,2,3 chapter assignment complete

// // 4,5,6,7 chapter assignment start

// let num1 = 5;
// let num2 = num1++ + num1-- + ++num1 + --num1;
// alert(num1);
// alert(num2);

// //  4,5,6,7 chapter assignment complete

// // 8,9 chapter assignmen start

// let q1 = prompt("Enter Your Firstname");
// let q2 = prompt("Enter Your LastName");
// let q3 = prompt("Enter Your Age");
// alert("Hello " + q1 + " " + q2 + " You are " + q3 + " old!");

// //  8.9 chapter assignment complete

// // // 10,11,12,13,14 chapter assignment start

// const num1 = Number(prompt("enter first number"));
// const num2 = Number(prompt("enter second number"));
// const sign = prompt("enter an opertator (+,-,*,/,%)");
// if (sign === "+") {
//   alert(num1 + num2);
// } else if (sign === "-") {
//   alert(num1 - num2);
// } else if (sign === "*") {
//   alert(num1 * num2);
// } else if (sign === "/") {
//   alert(num1 / num2);
// } else if (sign === "%") {
//   alert(num1 % num2);
// } else {
//   alert("enter valid operator");
// }

// // // 10,11,12,13,14 chapter assignment complete

// // 10,11,12,13,14 chapter  second assignment start
// const course1 = Number(prompt("enter your english marks"));
// const course2 = Number(prompt("enter your urdu marks"));
// const course3 = Number(prompt("enter your math marks"));
// const course4 = Number(prompt("enter your computer marks"));
// const course5 = Number(prompt("enter your physics marks"));
// const obtainMarks = course1 + course2 + course3 + course4 + course5;
// const totalMarks = 500;
// const print = (obtainMarks * 100) / totalMarks;
// alert("your persontage is " + print + " %" + "out of 100%");

// // 10,11,12,13,14 chapter second assignment complete

// var courses = [];
// for (var i = 1; i <= 5; i++) {
//   courses.push(prompt("Enter course " + i + " name:"));
// }
// alert(courses);
// for (var i = 0; i < courses.length; i++) {
//   courses.splice(
//     i,
//     1,
//     prompt("Enter course " + (i + 1) + " name:", courses[i])
//   );
// }
// alert(courses);

// // 21 to 30 chapter start
// let input = prompt("Enter a number with a decimal point:");
// let greaterNumber = Math.ceil(input);
// let text = "This is my dummy text";
// let slicedText = text.slice(0, greaterNumber);
// let reversedText = "";
// for (let i = slicedText.length - 1; i >= 0; i--) {
//   reversedText += slicedText[i];
// }
// alert(reversedText);
// // 21 to 30 chapter complete

// // 21 to 30 2nd assignment  chapter start
// // take input value from user
// let inputValue = prompt("Enter a string:");
// inputValue = inputValue.toLowerCase().replace(/\b\w/g, function (c) {
//   return c.toUpperCase();
// });
// console.log(inputValue);

// // 21 to 30 2nd assignment  chapter complete

// 31 to 34 chapter assignment start

// let name = prompt("Enter your name:");
// let day = prompt("Enter your day of birth (1-31):");
// let month = prompt("Enter your month of birth (1-12):");
// let year = prompt("Enter your year of birth (e.g. 1999):");
// let dob = new Date(`${month}-${day}-${year}`);
// let now = new Date();
// let currentTime = now.getTime();
// let dobTime = dob.getTime();
// let ageInSeconds = (currentTime - dobTime) / 1000;
// let ageInMinutes = ageInSeconds / 60;
// let ageInHours = ageInMinutes / 60;
// let ageInDays = ageInHours / 24;
// let ageInMonths = (ageInDays / 365) * 12;
// let ageInYears = ageInDays / 365;
// let ageString = `${Math.floor(ageInYears)} years ${Math.floor(
//   ageInMonths
// )} months ${Math.floor(ageInDays)} days ${Math.floor(
//   ageInHours % 24
// )} hours ${Math.floor(ageInMinutes % 60)} minutes ${Math.floor(
//   ageInSeconds % 60
// )} seconds`;
// let greeting;
// if (now.getHours() >= 5 && now.getHours() < 12) {
//   greeting = "Good Morning";
// } else if (now.getHours() >= 12 && now.getHours() < 18) {
//   greeting = "Good Afternoon";
// } else if (now.getHours() >= 18 && now.getHours() < 21) {
//   greeting = "Good Evening";
// } else {
//   greeting = "Good Night";
// }
// let dobString = dob.toLocaleString("en-PK", { timeZone: "Asia/Karachi" });
// let nextBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
// if (now.getTime() > nextBirthday.getTime()) {
//   nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
// }
// let timeRemaining = nextBirthday.getTime() - now.getTime();
// let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
// let hours = Math.floor(
//   (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
// );
// let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
// let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
// console.log(`Hello ${name}, ${greeting}`);
// console.log(`Your DOB is ${dobString}`);
// console.log(`You are ${ageString} old`);
// console.log(`Your age in days is ${Math.floor(ageInDays)}`);
// if (days === 0) {
//   console.log(
//     `Happy Birthday ${name}. Today is your ${Math.floor(ageInYears)}${
//       Math.floor(ageInYears) === 1
//         ? "st"
//         : Math.floor(ageInYears) === 2
//         ? "nd"
//         : "th"
//     } birthday`
//   );
// } else {
//   console.log(
//     `How much time left in your next birthday? ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
//   );
// }

// 31 to 34 chapter assignment complete

// 35 to 38 chapter 1st assignment start

// function capitalizeWords(str) {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }
//   return words.join(" ");
// }

// let inputValue = "cloUd naTive computinG";
// inputValue = capitalizeWords(inputValue);
// console.log(inputValue);

// 35 to 38 chapter 1st assignment complete

// 35 to 38 chapter 2nd assignment start

// let value = prompt("Enter a number:");
// let result = factorial(value);
// console.log(result);

// function factorial(num) {
//   if (num < 0) {
//     return -1;
//   } else if (num == 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// 35 to 38 chapter 2nd assignment complete

// 39 to 42 assingment start

// let course1 = parseInt(prompt("Enter marks for course 1:"));
// let course2 = parseInt(prompt("Enter marks for course 2:"));
// let course3 = parseInt(prompt("Enter marks for course 3:"));
// let course4 = parseInt(prompt("Enter marks for course 4:"));
// let course5 = parseInt(prompt("Enter marks for course 5:"));
// let obtainedMarks = course1 + course2 + course3 + course4 + course5;
// let totalMarks = 500;
// let percentage = (obtainedMarks * 100) / totalMarks;
// let grade;
// switch (true) {
//   case percentage >= 90:
//     grade = "A+";
//     break;
//   case percentage >= 75 && percentage < 90:
//     grade = "A";
//     break;
//   case percentage >= 60 && percentage < 75:
//     grade = "B";
//     break;
//   case percentage >= 45 && percentage < 60:
//     grade = "C";
//     break;
//   case percentage >= 30 && percentage < 45:
//     grade = "D";
//     break;
//   default:
//     grade = "F";
// }
// let message = `Your percentage is ${percentage}% and your grade is ${grade}`;
// alert(message);
// 39 to 42 assingment complete
