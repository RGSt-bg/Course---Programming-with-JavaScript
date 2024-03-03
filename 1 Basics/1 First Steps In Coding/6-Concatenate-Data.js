function concatenateData(input) {

    //console.log("You are " + input[0] + " " + input[1] + ", a " + input[2] + "-years old person from " + input[3] + ".");
    
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
    
};

concatenateData(["Rumen", "Stefanov", 53, "Rousse"]);
