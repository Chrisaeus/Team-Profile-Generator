const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createHTML = require("./src/createHTML");

inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "Team Manager's name:"
        },
        {
            type: "input",
            name: "managerID",
            message: "Team Manager's ID:"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Team Manager's email:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Team Manager's office number:"
        }
    ])
    .then((response) => {
        const employeeList = employeeProfiles([new Manager(response.managerName, response.managerID, response.managerEmail, response.officeNumber)]);
        return employeeList;
    })
    .then((employeeList) => console.log(employeeList))
    .catch(err => console.log(err));

const employeeProfiles = async (employeeList) => {
    await inquirer
        .prompt([
            {
                type: "list",
                name: "mainMenu",
                message: "Choose an option:",
                choices: ["Add an engineer", "Add an intern", "Finish building team"]
            }
        ])
        .then((response) => {
            switch (response.mainMenu) {
                case "":
                    break;
                case "":
                    break;
                case "":
                    break;
                default:
                    employeeProfiles(employeeList);
            }
        })
        .catch(err => console.log(err));
    
    return employeeList;
};

/*
1. Inquire about employees
2. Make for loop that makes divs for each new employee
3. Take those divs and insert into html shell (string literal)
4. Create html file from populated shell

get manager info
call function for main menu, pass in responses for manager?
Array of objects, objects are created employees
*/