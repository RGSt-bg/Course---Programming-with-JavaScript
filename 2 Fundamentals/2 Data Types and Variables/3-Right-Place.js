function rightPlace(str1, char, str2)
{
    // let result = str1.replace("_", char);
    // let print = result === str2? "Matched": "Not Matched";
    //console.log(print);

    let result = "";
    
    for (let i = 0; i < str1.length; i++)
    {
        if (str1.charAt(i) != "_") result = result + str1.charAt(i);
        else result = result + char;
    }

    if (result == str2) console.log("Matched");
    else console.log("Not Matched");

}

rightPlace('Str_ng', 'I', 'Strong');