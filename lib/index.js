const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager.js");

newManager = new Manager(answers.name, answers.id, answers.email);
newIntern = new Intern(answers.name, answers.id, answers.email);
newEngineer = new Engineer(answers.name, answers.id, answers.email);

const input = require(answers);
const answers = require(input);

teamZArray.push(manager);

const questions = [
	{
		type: "input",
		name: "name",
		message: "What's your name?",
	},
	{
		type: "input",
		name: "id",
		message: "What's your title?",
	},
	{
		type: "list",
		name: "license",
		message: "What is your email address?",
	},
	w,
];

// function to write README file
function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {}
inquirer.prompt(questions).then((answer) => {
	console.log(answer);
	writeToFile("README.md", generateMarkdown(answer));
});
// function call to initialize program
init();

async function init() {
	console.log("hi");
	try {
		const answers = await promptUser();

		const html = generateHTML(answers);
		//writeFile will creat html page with the answers
		await writeFileAsync("index.html", html);

		console.log("Successfully wrote to index.html");
	} catch (err) {
		console.log(err);
	}
}

init();
