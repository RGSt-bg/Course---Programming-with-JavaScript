function grandpaStavri(Input)
{
    let days = Number(Input[0]);
    let brandyQt = 0;
    let brandyDg = 0;
    let brandyAll = 0;
    let degrees = 0;

    for (let i = 1; i <= days * 2; i = i + 2)
    {
            brandyQt = Number(Input[i]);
            brandyDg = Number(Input[i+1]);
            brandyAll = brandyAll + brandyQt;
            degrees = degrees + brandyQt * brandyDg;
    }
    degrees = degrees / brandyAll;

    console.log(`Liter: ${brandyAll.toFixed(2)}`);
    console.log(`Degrees: ${degrees.toFixed(2)}`);

    if (degrees < 38) console.log("Not good, you should baking!");
    else if (degrees >= 38 && degrees <= 42) console.log("Super!");
    else console.log("Dilution with distilled water!");
}

grandpaStavri(["2","200","43","200","40"]);

