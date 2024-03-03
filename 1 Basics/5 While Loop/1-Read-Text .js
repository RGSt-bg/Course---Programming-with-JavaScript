function readText(input)
{
    let text = input[0];
    let i = 0;

    while (text != "Stop")
    {
        console.log(text);
        i++;
        text = input[i];
    }
}

readText(["Sofia","Berlin","Moscow","Athens","Madrid","London","Paris","Stop","AfterStop"]);