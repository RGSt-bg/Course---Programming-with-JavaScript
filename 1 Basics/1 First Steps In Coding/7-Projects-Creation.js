function projectsCreation(input) {

    let name = input[0];
    let projects = input[1];
    let hours = projects * 3;

    //console.log("The architect " + input[0] + " will need " + hours + " hours to complete " + input[1] + " project/s.");
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);
    
};

projectsCreation(['Veselin Georgiev', 14]);