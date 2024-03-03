function integerAndFloat(n1, n2, n3)
{
	let sum = n1 + n2 + n3;
	if (sum % 1 == 0) console.log(`${sum} - Integer`);
	else console.log(`${sum} - Float`);

	//sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
	//console.log(sum);
}

integerAndFloat(9, 100, 1.1);