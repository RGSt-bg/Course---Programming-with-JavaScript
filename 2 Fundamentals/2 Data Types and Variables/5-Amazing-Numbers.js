function amazingNumbers(numb)
{
	let sum = 0;
    let numbAsStr = numb.toString();

    for (let i = 0; i < numbAsStr.length; i++) sum += Number(numbAsStr[i]);

    let result = sum.toString().includes("9") ? "True" : "False";

    console.log(`${numb} Amazing? ${result}`);
}

amazingNumbers(5554);