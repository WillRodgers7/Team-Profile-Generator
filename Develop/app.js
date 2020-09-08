const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const team = [];
















// Write code to use inquirer to gather information about the development team members,
function menu() {
  inquirer.prompt({
      type: "list",
      name:"userAction",
      message:"What would you like to create?",
      choices: ["Manager", "Engineer", "Intern", "Build Team"]
  })
  .then(choice =>{
      if (choice.userAction === "Manager"){
          createManager();
      }
      else if (choice.userAction ==="Engineer"){
       createEngineer();
   
   
      }
      else if (choice.userAction ==="Intern"){
       createIntern();
   
      }
      else if (choice.userAction ==="Build Team"){
        buildTeam(fileName,team);
     
        }
  })
}
menu();


// and to create objects for each team member (using the correct classes as blueprints!)
// Manager Function
// const questions(){

function createManager(){
   const managerQuestions = [{
       
       type: "input",
       name: "name",
       message: "What is your name?"
       
   },
   {
       
       type: "input",
       name: "id",
       message: "What is your id?"
       
   },
   {
       
       type: "input",
       name: "email",
       message: "What is your email?"
       
   },
   {
       
       type: "input",
       name: "number",
       message: "What is your office number?"
       
   }
];

   inquirer.prompt(managerQuestions)
   .then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
    team.push(manager);
       inquirer.prompt([{
          type: "confirm",
          name: "continue",
          message: "Would you like to add another employee?"
       }])
       .then(answer => {
          if (answer.continue){
             menu()
          }  else {
            buildTeam("team.html", team)
         }
       })})
}
// Engineer Function
function createEngineer(){
   const engineerQuestions = [{
       
       type: "input",
       name: "name",
       message: "What is your name?"
       
   },
   {
       
       type: "input",
       name: "id",
       message: "What is your id?"
       
   },
   {
       
       type: "input",
       name: "email",
       message: "What is your email?"
       
   },
   {
       
       type: "input",
       name: "github",
       message: "What is your Github username?"
       
   }
];
   inquirer.prompt(engineerQuestions)
   .then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(engineer);
       inquirer.prompt([{
          type: "confirm",
          name: "continue",
          message: "Would you like to add another employee?"
       }])
       .then(answer => {
          if (answer.continue){
             menu()
          }  else {
            buildTeam("team.html", team)
         }
       })})
}
// Intern Function
function createIntern(){
   const internQuestions = [{
       
       type: "input",
       name: "name",
       message: "What is your name?"
       
   },
   {
       
       type: "input",
       name: "id",
       message: "What is your id?"
       
   },
   {
       
       type: "input",
       name: "email",
       message: "What is your email?"
       
   },
   {
       
       type: "input",
       name: "school",
       message: "What school are you currently attending?"
       
   }
];
   inquirer.prompt(internQuestions)
   .then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);
       inquirer.prompt([{
          type: "confirm",
          name: "continue",
          message: "Would you like to add another employee?"
       }])
       .then(answer => {
          if (answer.continue){
             menu()
          }  else {
            buildTeam("team.html", team)
         }
       })})
}

function buildTeam(fileName, data) {
    console.log(data);
    return fs.writeFileSync(path.join (process.cwd (), fileName), render(team));
    
}





// to inject javascript variables or functions use ${variableName}
// After the user has input all employees desired, call the render function (required
// above) and pass in an array containing all employee objects; the render function will
// generate and return a block of HTML including templated divs for each employee!



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the render function. Now write it to a file named team.html in the
// output folder. You can use the variable outputPath above target this location.


// Hint: you may need to check if the output folder exists and create it if it
// does not.


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.



// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided render function to work! 

