//checking js file is linked
console.log('we have javascript!')
// document ready execute readyNow functionality
$(document).ready(readyNow);

//master employee info array to store employee information fields in an object
let employeeInfoArray = [];
//variable to track employees for the delete function later on
let hrNumber = 0;
let totalEmployeeCosts = 0;


function readyNow() {
    //console log that dom is loaded
    console.log("DOM is loaded!");
    //ensure function employeeInfoAdd executes when "submit employee info" is clicked
    $('.button').on('click', employeeInfoAdd);
    //ensure fuction employeeInfoDelete executes when "delete" button is clicked on a row of employee info
    $('.employeeTable').on('click', '.deleteEmployee', employeeInfoDelete);
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
        hrNumber: hrNumber, //appends the new unique HR number to new employee entered
    }  //creates object for each employee containing all five parts of information
    
    employeeInfoArray.push(employeeInfoObject);
    
    //empties data fields for next entry now that array has been added to
    $(`#firstNameInput`).val(''),
    $(`#lastNameInput`).val(''),
    $('#employeeIdInput').val(''),
    $(`#positionTitleInput`).val(''),
    $('#annualSalaryInput').val(''),


    //console logs the array as it stands
    //console.log(employeeInfoArray);
    //render to DOM
    render();
}


//delete the employee that you clicked on, recreate the array and render it 
function employeeInfoDelete() {
    //let me know if button is activating
    //console.log('delete employee button clicked')
    let newEmployeeInfoArray = []; //will hold the posts we still want
   

    //VIN METHOD NOT WORKING
    let toDelete = $(this).attr('id');
    console.log('employee hr number we want to delete is', toDelete);

    //POSTS METHOD NOT WORKING
    //
    //reminder that $(this) is the specific element that was clicked
    //let contentToDelete = $(this) // the delete <button>
    //    .parent()           // the table data <td> in which the button lives
    //    .siblings()         // all table data <td> in that row
    //    .first()            // the first those <td>s
    //    .text();
    //console.log('content to delete', toDelete)
    
    for (let employeeInfoObject of employeeInfoArray) {
        // add items that don't match contentToDelete into array
        if (employeeInfoObject.hrNumber  != toDelete) {
            newEmployeeInfoArray.push(employeeInfoObject);
            console.log('not to delete!');
        }
    }
    console.log(newEmployeeInfoArray);
    //update employeeInfoArray to reflect the deleted employee by reconstituting the array minus that deleted employees data
    employeeInfoArray = newEmployeeInfoArray;
    render();    
}



function render() {
    //render is working
    //console.log('render up!');
    //need to empty the .employeeTable so Array output doesn't stack on itself
    $('.employeeTable').empty();
    //iterate though employeeInfoArray to reference employeeInfoObject five key properties entered in input fields
    for (let employeeInfoObject of employeeInfoArray) {
        $('.employeeTable').append(`
        <tr>
        <td>${employeeInfoObject.firstName}</td>
        <td>${employeeInfoObject.lastName}</td>
        <td>${employeeInfoObject.employeeId}</td>
        <td>${employeeInfoObject.positionTitle}</td>
        <td>${employeeInfoObject.annualSalary}</td>
        <td><button class="deleteEmployee" id="${employeeInfoObject.hrNumber}">Delete</button></td>
        </tr>`)
    }
   
    //total employee costs tally
    totalEmployeeCosts = 0; //resets so the total doesn't aggregate
    employeeInfoArray.forEach(employeeInfoObject => {
        totalEmployeeCosts += Number(employeeInfoObject.annualSalary);
    });
    //let intlUs = Intl.NumberFormat('en-US'); attempt to get commas inserted but making a huge mess of things
    let monthlyEmployeeCosts = ((totalEmployeeCosts / 12).toFixed(2));
    $('#totalCost').empty();
    $('#totalCostRed').empty();
    if (monthlyEmployeeCosts <= 20000) {
        $('#totalCost').append(`<td>Total Monthly Employee Salary Costs: $${monthlyEmployeeCosts}</td>`)   
    } else if (monthlyEmployeeCosts > 20000) {
        $('#totalCostRed').append(`<td>Total Monthly Employee Salary Costs: $${monthlyEmployeeCosts}</td>`)
    };
    
    //$('#totalCost').append(`<td>Total Monthly Employee Salary Costs: ${monthlyEmployeeCosts}</td>`)
}




// id="${employeeInfoObject.hrNumber}  potential button ID for later on