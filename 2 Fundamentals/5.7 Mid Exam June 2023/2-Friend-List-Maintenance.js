function friendListMaintenance(inputArr) {

    let friendsArr = inputArr.shift().split(", ");
    let blacklistedCount = 0;
    let lostCount = 0;

    for (let i = 0; i < inputArr.length; i++) {
        let [action, index, name] = inputArr[i].split(" ");

        switch(action) {

            case "Blacklist" : {
                if (friendsArr.indexOf(index) > -1) {
                    console.log(`${index} was blacklisted.`);
                    friendsArr[friendsArr.indexOf(index)] = "Blacklisted";
                    blacklistedCount++;
                }
                else console.log(`${index} was not found.`);
                break;
            }
            case "Error" : {
                index = Number(index);
                if (index >= 0 && index < friendsArr.length) {
                    if (friendsArr[index] !== "Blacklisted" && friendsArr[index] !== "Lost") {
                        console.log(`${friendsArr[index]} was lost due to an error.`);
                        friendsArr[index] = "Lost";
                        lostCount++;
                        }
                    else break;
                }
                break;
            }
            case "Change" : {
                index = Number(index);
                if (index >= 0 && index < friendsArr.length) {
                    console.log(`${friendsArr[index]} changed his username to ${name}.`);
                    friendsArr[index] = name;
                }
                else break;
                break;
            }
            case "Report" : {
                console.log(`Blacklisted names: ${blacklistedCount}`);
                console.log(`Lost names: ${lostCount}`);
                console.log(friendsArr.join(" "));
                break;
            }
        }
    }

}

friendListMaintenance(["Mike, John, Eddie","Blacklist Mike","Error 0","Report"]);
friendListMaintenance(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]);
friendListMaintenance(["Mike, John, Eddie, William","Blacklist Maya","Error 1","Change 4 George","Report"]);