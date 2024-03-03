function addAndRemove(commands) {

    let newArr = [];

    for (i = 1; i <= commands.length; i++)
        if (commands[i-1] == "add") newArr.push(i)
        else newArr.pop();

    if (newArr.length == 0) console.log("Empty");
    else console.log(newArr.join(" "));
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);