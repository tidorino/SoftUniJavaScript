function projectCreation(input) {
    let firstName = input[0];
    let numberprojects = input[1];
    let timeForProjects = numberprojects * 3;
    console.log(`The architect ${firstName} will need ${timeForProjects} hours to complete ${numberprojects} project/s.`); 
}
projectCreation(["George ","4 "])