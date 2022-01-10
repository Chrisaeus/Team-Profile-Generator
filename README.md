# Team Profile Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## Description

The Team Profile Generator is a command line application that lets a user generate an html file that displays small profiles for a programming team consisting of a Team Manager and any number of engineers and interns. The profiles display the names, ID numbers, and email addresses of all members. The manager's office number, links to the engineers' GitHub profiles, and the schools the interns belong to are also displayed. Each of these fields is populated by user input to prompts using the Inquirer package.


---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

---

## Installation

1. Open command line to root folder.

2. `npm i` &nbsp; to install dependencies.

3. `npm start` &nbsp; to run the application.


---

## Usage

When the app starts, it will prompt the user for the name, ID, email address, and office number of the Team Manager. After answers are given for these prompts, the user is given the choice to either add an engineer, add an intern, or finish building the team.

Choosing to add an engineer will prompt the user for the name, ID, email address, and GitHub username of the engineer that is being added. Choosing to add an intern will bring up the same prompts but instead of a GitHub username, the application asks for the name of the school that the intern attended.

As many engineers and interns as needed can be added before choosing "Finish building team". When this is selected, an HTML file will be generated and placed in the "dist" directory of the root folder. This page shows the team members' profiles in neatly arranged cards.

<br/>

#### Example GIF - click to open full video in browser

[![Team Profile Generator GIF](<./assets/images/Team Profile Generator.gif>)](https://watch.screencastify.com/v/PzbOiDaYVYizKYOGP31d)


---

## Contributing

Any contributions that conform to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) are welcome!


---

## Tests

This application comes with tests (by way of the Jest npm package) for each respective class model and extension (Employee, Manager, Engineer, and Intern).

To run the tests, execute the command &nbsp; `npm run test`.


---

## License

MIT License

Copyright &copy; 2022 Christian Sadler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Questions

If you have questions, contact me on [GitHub](https://github.com/Chrisaeus) or send me an e-mail at <christian.sadler@yahoo.com>.