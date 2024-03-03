function argumentInfo(...args) {

    let typesObj = {};
    
    args.forEach(argument => {
        console.log(`${typeof(argument)}: ${argument}`);
        if (!typesObj.hasOwnProperty(typeof(argument))) typesObj[typeof(argument)] = 0;
        typesObj[typeof(argument)]++;
    });

    Object.entries(typesObj).sort((a, b) => b[1] - a[1]).forEach(element => {
        console.log(`${element[0]} = ${element[1]}`);
    });
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
console.log("-----------------------");
argumentInfo({ name: 'bob'}, 3.333, 9.999);