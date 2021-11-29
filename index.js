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
        .then(async (response) => {
            switch (response.mainMenu) {
                case "Add an engineer":
                    await inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "engineerName",
                                message: "Engineer's name:"
                            },
                            {
                                type: "input",
                                name: "engineerID",
                                message: "Engineer's ID:"
                            },
                            {
                                type: "input",
                                name: "engineerEmail",
                                message: "Engineer's email:"
                            },
                            {
                                type: "input",
                                name: "github",
                                message: "Engineer's GitHub username:"
                            }
                        ])
                        .then((response) => {
                            employeeList.push(new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.github));
                            return employeeList;
                        })
                        .catch(err => console.log(err));

                    await employeeProfiles(employeeList);
                    break;
                case "Add an intern":
                    await inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "internName",
                                message: "Intern's name:"
                            },
                            {
                                type: "input",
                                name: "internID",
                                message: "Intern's ID:"
                            },
                            {
                                type: "input",
                                name: "internEmail",
                                message: "Intern's email:"
                            },
                            {
                                type: "input",
                                name: "school",
                                message: "Name of the intern's school:"
                            }
                        ])
                        .then((response) => {
                            employeeList.push(new Intern(response.internName, response.internID, response.internEmail, response.school));
                            return employeeList;
                        })
                        .catch(err => console.log(err));

                    await employeeProfiles(employeeList);
                    break;
                case "Finish building team":
                    return employeeList;
                    break;
                default:
                    await employeeProfiles(employeeList);
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