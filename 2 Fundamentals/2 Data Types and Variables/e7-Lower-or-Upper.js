function lowerOrUpper(ch)
{
    let upperCase = ch.toUpperCase();
    let result = ch === upperCase ? "upper-case" : "lower-case";
    console.log(result);
}

lowerOrUpper('l');