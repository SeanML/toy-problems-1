// Link: https://challenge.makerpass.com/c/480211a59efa6e603454c6d667615475

// Description:
// A teacher needs your help grading her class of students. Given a report of all student grades, return both the class average and the average of each student.

// NOTE: Round any calculations to the nearest 2 decimal places.

// Test Cases:
// autograde("Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18") => { "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }

// Code:
const autograde = (report) => {
  let students = report.split("\n");
  let result = {};
  let allGrades = [];
  result.all = 0;
  students.forEach((student, index) => {
    let studentArr = student.split(' ');
    let currStudent = studentArr[0];
    result[currStudent] = [];
    for(let i = 1; i < studentArr.length; i++) {
      result[currStudent].push(Number(studentArr[i]));
      allGrades.push(Number(studentArr[i]));
      if(i === studentArr.length - 1) {
        result[currStudent] = Number((result[currStudent].reduce((a,b) => {
          return a + b;
        }) / result[currStudent].length).toFixed(2));
      }
    }
  });
  result.all = Number((allGrades.reduce((a,b) => {
    return a + b;
  }) / allGrades.length).toFixed(2));
  return result;
};