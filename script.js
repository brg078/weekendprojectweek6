//checking js file is linked
console.log('we have javascript!')
// document ready execute readyNow functionality
$(document).ready(readyNow);

//master employee info array to store employee information fields in an object
let employeeInfoArray = [];
//variable to track employees for the delete function later on
let hrNumber = 0;

function readyNow() {
    //console log that dom is loaded
    console.log("DOM is loaded!");
    //ensure function employeeInfoAdd executes when "submit employee info" is clicked
    $('.button').on('click', employeeInfoAdd);

  render();
}


//collect employeeInfo-- firstName, lastName, idNumber, jobTitle, annualSalary....  append objects into array above
function employeeInfoAdd() {
    hrNumber++;   //assigns a unique value to each employee entered
    console.log('employee info added', hrNumber);
    let employeeInfoObject = {
        firstName: $(`#firstNameInput`).val(),
        lastName: $(`#lastNameInput`).val(),
        employeeId: $('#employeeIdInput').val(),
        positionTitle: $(`#positionTitleInput`).val(),
        annualSalary: $('#annualSalaryInput').val(),
        hrNumber: hrNumber,
    }  //creates object for each employee containing all five parts of information
    
    employeeInfoArray.push(employeeInfoObject);
    
    //empties data fields for next entry now that array has been added to
    $(`#firstNameInput`).val(''),
    $(`#lastNameInput`).val(''),
    $('#employeeIdInput').val(''),
    $(`#positionTitleInput`).val(''),
    $('#annualSalaryInput').val(''),

    //console logs the array as it stands
    console.log(employeeInfoArray);
    //render to DOM
    render();
}


//delete the employee that you clicked on, recreate the array and render it 
//function deleteEmployeeInfo();

function render() {
    console.log('render up!');
    

    $()
}

//clear input field, render that employee info onto the DOM
//function render();