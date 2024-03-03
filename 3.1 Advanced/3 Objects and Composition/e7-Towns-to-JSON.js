function townsToJSON(inputArr) {

    let outputArr = [];

    for (let i = 1; i < inputArr.length; i++) {

        let locationObj = {};
        
        let [, town, latitude, longitude, ] = inputArr[i].split("|");
        town = town.trim();
        latitude = latitude.trim();
        longitude = longitude.trim();
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        locationObj.Town = town;
        locationObj.Latitude = parseFloat(latitude);
        locationObj.Longitude = parseFloat(longitude);
        outputArr.push(locationObj);
    }

    return JSON.stringify(outputArr);
}

townsToJSON(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']);
console.log("------------------------------------");
townsToJSON(['| Town | Latitude | Longitude |', '| Veliko Turnovo | 43.0757 | 25.6172 |', '| Monatevideo | 34.50 | 56.11 |']);