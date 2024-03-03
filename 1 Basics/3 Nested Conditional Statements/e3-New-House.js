function newHome(input)
{

	let flowerType = input[0];
	let flowerCount = Number(input[1]);
	let budget = Number(input[2]);
	let sum = 0.00;

	switch (flowerType)
	{
		case "Roses":
		{
		if (flowerCount > 80) sum = flowerCount * 5 * 0.9;
		else sum = flowerCount * 5;
		consPrint(budget, sum, flowerCount, flowerType);
		}
		break;
		case "Dahlias":
		{
		if (flowerCount > 90) sum = flowerCount * 3.8 * 0.85;
		else sum = flowerCount * 3.8;
		consPrint(budget, sum, flowerCount, flowerType);
		}
		break;
		case "Tulips":
		{
		if (flowerCount > 80) sum = flowerCount * 2.8 * 0.85;
		else sum = flowerCount * 2.8;
		consPrint(budget, sum, flowerCount, flowerType);
		}
		break;
		case "Narcissus":
		{
		if (flowerCount < 120) sum = flowerCount * 3 * 1.15;
		else sum = flowerCount * 3;
		consPrint(budget, sum, flowerCount, flowerType);
		}
		break;
		case "Gladiolus":
		{
		if (flowerCount < 80) sum = flowerCount * 2.5 * 1.2;
		else sum = flowerCount * 2.5;
		consPrint(budget, sum, flowerCount, flowerType);
		}
		break;
	}
	
  function consPrint(budget, sum, flowerCount, flowerType)
  {
	let difference = 0.00;

	difference = Math.abs(budget - sum);
	if (budget >= sum)
	     console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${difference.toFixed(2)} leva left.`);
	else console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
	return;
  }

}

newHome(["Narcissus","119","360"]);

// Кода на Теди:

// function newHome(input){
//     let flowerType =(input[0])
//     let count=Number(input[1])
//     let buget =Number(input[2])

//     let price =0
    
//     switch (flowerType){
//     case "Roses":
//         price = count * 5.00
//         if (count > 80) {price = price * 0.90}
//         break
//     case "Dahlias":
//         price = count * 3.80
//         if (count > 90) {price = price * 0.85}
//         break
//     case "Tulips":
//         price = count * 2.80
//         if (count > 80) {price = price * 0.85}
//         break
//     case "Narcissus":
//         price = count * 3.00
//         if (count < 120) {price = price * 1.15}
//         break
//     case "Gladiolus":
//         price = count * 2.50
//         if (count < 80) {price = price * 1.20}
//         break



//     }
//     if (buget >= price) {console.log(`Hey, you have a great garden with ${count} ${flowerType} and ${Math.abs(buget - price).toFixed(2)} leva left.`)
// }   else if (price > buget) {console.log(`Not enough money, you need ${Math.abs(buget - price).toFixed(2)} leva more.`)}
// }
// newHome(["Dahlias","112","460"])