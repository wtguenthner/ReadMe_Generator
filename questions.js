// Generates questions for the readme
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name:'description',
        message: 'Enter description of your project:'
    },
    {
        type: 'input',
        name:'usage',
        message: 'Enter usage information for your project:'
    },
    {
        type: 'input',
        name:'contributions',
        message: 'Enter any contributions for your project:'
    },
    {
        type: 'input',
        name:'instructions',
        message: 'Describe test instructions:'
    },
    {
        type: 'input',
        name:'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name:'email',
        message: 'Enter your email:'
    },
    {
        type: 'list',
        name:'license',
        message: 'Any licenses?',
        choices: ['MIT','Apache','Python','None']
    }
];

export default questions;