class footballTeam {

    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let playerArr = [];
        let name = "";
        let age = 0;
        let playerValue = 0;
        let outputStr = "You successfully invite ";
        
        footballPlayers.forEach(playerData => {
            [name, age, playerValue] = playerData.split("/");
            age = Number(age);
            playerValue = Number(playerValue);

            if (!this.invitedPlayers.includes(name, 0)) {
                playerArr[0] = age;
                playerArr[1] = playerValue;
                this.invitedPlayers.push(name);
                this.invitedPlayers.push(playerArr);
                playerArr = [];
                outputStr += name + ", ";
            }
            else {
                let playerPosInArr = this.invitedPlayers.indexOf(name);

                if (this.invitedPlayers[playerPosInArr+1].age < playerValue) this.invitedPlayers[playerPosInArr+1].age = playerValue;
            }
            });
        return outputStr.slice(0, outputStr.length-2) + ".";
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/");
        playerOffer = Number(playerOffer);
        let playerPosInArr = this.invitedPlayers.indexOf(name);
        let priceDifference = 0;

        if (playerPosInArr == -1) throw new Error(`${name} is not invited to the selection list!`);

        if (this.invitedPlayers[playerPosInArr+1][1] === "Bought") return;
        if (this.invitedPlayers[playerPosInArr+1][1] > playerOffer) {
            priceDifference = this.invitedPlayers[playerPosInArr+1][1] - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }
        this.invitedPlayers[playerPosInArr+1][1] = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let playerPosInArr = this.invitedPlayers.indexOf(name);
        age = Number(age);

        if (playerPosInArr == -1) throw new Error(`${name} is not invited to the selection list!`);

        let ageDifference = age - this.invitedPlayers[playerPosInArr+1][0];
        if (this.invitedPlayers[playerPosInArr+1][0] < age)
        if (ageDifference < 5)
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;

        if (ageDifference > 5) return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;

        if (this.invitedPlayers[playerPosInArr+1][0] >= age) return `${name} is above age limit!`;
    }

    transferWindowResult() {
        console.log("Players list:");

        let sortedInvitedPlayers = this.invitedPlayers.sort((a, b) => a[0].localeCompare(b[0]));

        sortedInvitedPlayers.forEach(player => {
            console.log(`Player ${sortedInvitedPlayers[0][0]}-${sortedInvitedPlayers[0][1]}`)
        });
    }
}


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Kylian Mbappé/23/200", "Pau Torres/25/52"]));
// console.log("--------------------------------------------------------");

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));
// console.log("--------------------------------------------------------");

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log("--------------------------------------------------------");

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
