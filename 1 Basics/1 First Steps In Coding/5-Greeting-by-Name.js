function greetingByName(input) {

    let name = input[0];
    
    console.log(`Hello, ${name}!`);
    //console.log("Hello, " + name + "!");
    //console.log("Hello, " + input[0] + "!"); //И това работи
}

greetingByName(["Rumen"]);