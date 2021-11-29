const fs = require("fs");

createHTML = (employeeList) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="display: flex; flex-direction: row">
        ${employeeDivs(employeeList)}
    </div>
</body>
</html>`;

employeeDivs = (employeeList) => {
    let employeeDivs = ``;
    for (let i = 0; i < employeeList.length; i++) {
        employeeDivs +=
`<div style="margin: 10px">
    <h2>${employeeList[i].name}</h2>
    <h3>${employeeList[i].getRole()}</h3>
    <div>
        <p>ID: ${employeeList[i].getId()}</p>
        <p>Email: <a href="mailto:${employeeList[i].getEmail()}">${employeeList[i].getEmail()}</a></p>
        ${employeeList[i].getRole() == "Engineer" ? `<p>GitHub: <a href="https://github.com/${employeeList[i].github}" target="_blank">${employeeList[i].github}</a></p>` : ``}
        ${employeeList[i].getRole() == "Intern" ? `<p>School: ${employeeList[i].school}</p>` : ``}
    </div>
</div>\n\t`;
    }
    return employeeDivs;
}

module.exports = createHTML;