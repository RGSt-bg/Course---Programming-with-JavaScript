function reverseString(word)
{
    let revString = "";
    
    for (let i = word.length-1; i >= 0; i--) revString = revString + word.charAt(i);

    console.log(revString);
}

reverseString("SoftUni");