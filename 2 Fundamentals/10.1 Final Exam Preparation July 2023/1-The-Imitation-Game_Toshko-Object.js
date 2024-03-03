function theImitationGame(data) {
    let text = data.shift();
 
    let parserObj = {
        "Move": (text, n) => {
            n = Number(n)
            for (let i = 0; i < n; i++) {
                let firstLetter = text.substring(0,1);
                let anotherText = text.substring(1);
                text = anotherText + firstLetter
            }
            return text;
        },
        "Insert": (text, index, value) => {
            index = Number(index);
            text = text.substring(0, index) + value + text.substring(index);
            return text;
        },
        "ChangeAll": (text, substr, repl) => {
            while(text.includes(substr)) {
                text = text.replace(substr, repl);
            }
            return text;
        }
    }
 
    for (let line of data) {
        if (line === "Decode") {
            break;
        }
 
        let token = line.split("|");
        let action = token[0];
        text = parserObj[action](text, token[1], token[2]);
        
    }
 
    console.log("The decrypted message is: " + text)
}

theImitationGame(['zzHe','ChangeAll|z|l','Insert|2|o','Move|3','Decode']);
console.log("------------------------------------");
theImitationGame(['owyouh','Move|2','Move|3','Insert|3|are','Insert|9|?','Decode']);