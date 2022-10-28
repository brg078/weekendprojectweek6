console.log('we have javascript!')

$(document).ready(readyNow);

let employeeInfo = [];

function readyNow() {
  console.log("DOM is loaded!");
}

//collect employeeInfo-- firstName, lastName, idNumber, jobTitle, annualSalary....  append objects into array above