function addAndRemoveElements(inputArr) {

    let outputArr = [];
    let command = "";

    for (let i = 1; i <= inputArr.length; i++) {

        command = inputArr[i - 1];
        switch (command) {

            case "add": outputArr.push(i); break;

            case "remove": outputArr.pop(); break;

            default: break;
        }
    }

    if (outputArr.length > 0) console.log(outputArr.join("\n"));
    else console.log("Empty");
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
console.log("---");
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
console.log("---");
addAndRemoveElements(['remove', 'remove', 'remove']);
console.log("---");