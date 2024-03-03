function convertToJSON(name, lastName, hairColor) {

    let personObj = {
        name,
        lastName,
        hairColor
    }

    console.log(JSON.stringify(personObj));
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');