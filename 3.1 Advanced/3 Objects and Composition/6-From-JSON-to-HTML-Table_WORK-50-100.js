function fromJSONToHTMLTable(inputStr) {

    let inputArr = JSON.parse(inputStr);

    let outputStr = "<table>\n";

    outputStr += "\t" + "<tr><th>" + Object.keys(inputArr[0]).join("</th><th>") + "</th></tr>";
    console.log(outputStr);
    outputStr = "";

    for (let i = 0; i < inputArr.length; i++) {

        outputStr += "\t" + "<tr><td>" + Object.values(inputArr[i]).join("</td><td>") + "</td></tr>";
        console.log(outputStr);
        outputStr = "";
        }

    console.log("</table>");
}

fromJSONToHTMLTable(`[{"Name":"Stamat","Score":5.5},
                      {"Name":"Rumen","Score":6}]`);
console.log("----------------------------------------------------");
fromJSONToHTMLTable(`[{"Name":"Pesho","Score":4," Grade":8},
                      {"Name":"Gosho","Score":5," Grade":8},
                      {"Name":"Angel","Score":5.50," Grade":10}]`);