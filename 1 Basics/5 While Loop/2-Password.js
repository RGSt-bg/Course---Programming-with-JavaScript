function password(input)
{
    let username = input[0];
    let password1 = input[1];
    let enteredPass = input[2];
    let i = 3;

    while (enteredPass != password1)
    {
        //console.log("Wrong password! Enter password:");
        i++;
        enteredPass = input[i];
    }

    console.log(`Welcome ${username}!`);

}

password(["Gosho","secret","secret"]);