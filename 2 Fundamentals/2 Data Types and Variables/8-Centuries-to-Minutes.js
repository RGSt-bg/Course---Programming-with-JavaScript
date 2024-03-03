function centuriesToMinutes(century)
{
    const years = century * 100;
    const days = Math.trunc(years * 365.2422);
    const hours = days * 24;
    const minutes = hours * 60;

    console.log(`${Math.round(century)} centuries = ${Math.round(years)} years = ${Math.round(days)} days = ${Math.round(hours)} hours = ${Math.round(minutes)} minutes`)
}

centuriesToMinutes(1);
centuriesToMinutes(5);
