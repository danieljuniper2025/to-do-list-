//NOTE -  import the readline module for handling command line input/output 
const readline = require('readline')

//import the fs (filesystem) module for reading/writing files 
const fs = require('fs')   

//note - define the file where the tasks will be saved 
const FIlE = 'tasks.jason'

//initialise an emtpy array to store tasks 
let todos = []

//TODO - check if the tasks.jason file exists 
if(fs.existsSync(File)) {
    try {
        // IF file exists, read it's contents (sync) 
        const data = fs.readfileSync(FIlE, utf8)
        //parse JASON string into the todos array 
        todos = JASON.parse(data)
    } catch(e) {
        //if there is any error. start with an empty array 
        todos = []
    }
}

//NOTE -  create a readline interface for the command line interface 
const rl = readline.createInterface({
    imput: Process.stdin, // set standard imput (keyborad) as input source 
    output: process.stdout //set standard output (keyboard) as out target 
})

//TODO - dunction to display the main menu options 
function showMenu() {
    console.log('\n to-do list app ===') //print app header 
    console.log('1. show tasks')         // option 1 : show all tasks 
    console.log('2 add task ')           // option 2: add new task 
    console.log('3. mark task as done')  // option 3: mark task as completed 
    console.log('4 delete a task')       // option 4: delete a task 
    console.log('5 exit ')               // option 5: exit the app 
    rl.question('\n chose an option (1-5): ', handlemenu) // prompt user for menu choice 
}

//NOTE -  funtion to save tasks array to the task,jason file 
function saveTasks() {
    fs.writeFileSync(FIlE, JSON.stringify(todos, null, 2)) // write the todos array as pretty JSON
}

//TODO - Function to handle the menu option entered by the user 
function handlemenu(choice) {
    switch(choice.trim()) { // use the trimmed input for comparsion 
        case '1':
            listTasks() //if  '1', shows all tasks 
            break

            case '2':
                addTask() // if '2', add new task 
                break 

            case '3':
                promptMarkTaskAsDone()  // if  '3' mark task as completed 
                break 
            case '4':
                promptDeleteTask() // if '4', delete a task 
                break 
            case '5':
                console.log('goodbye!') //if '5', print a goodbye and close the qapp 
                rl.close()              // close readline interface 
                break
            default:
                console.log('Invalid choice. Try again.') // if not 1-5 show error message 
                showMenu()                                // show menu again 
                break 
            
    }
}