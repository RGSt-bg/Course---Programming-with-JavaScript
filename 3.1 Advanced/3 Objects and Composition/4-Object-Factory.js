function objectFactory(libraryObj, ordersArr) { // FACTORY FUNCTION.

    let parts = [];
    let outputArr = [];
    let myObj = {};

    for (let i = 0; i < ordersArr.length; i++) {

        myObj = ordersArr[i].template;
        for (let j = 0; j < (ordersArr[i].parts).length; j++) {

            parts = ordersArr[i].parts[j];
            
            if (!myObj.hasOwnProperty(parts)) myObj[parts] = libraryObj[parts];
        }
        outputArr.push(myObj);
    }

    return outputArr;
}

objectFactory({print: function () {console.log(`${this.name} is printing a page`);},
                scan: function () {console.log(`${this.name} is scanning a document`);},
                play: function (artist, track) {console.log(`${this.name} is playing '${track}' by ${artist}`);},}, 
            [{template: { name: 'ACME Printer'}, parts: ['print']},
             {template: { name: 'Initech Scanner'}, parts: ['scan']},
             {template: { name: 'ComTron Copier'}, parts: ['scan', 'print']},
             {template: { name: 'BoomBox Stereo'}, parts: ['play']}]);