function dayOfWeek(numb)
{
	let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	if (numb >= 1 && numb <= 7) console.log(days[numb-1]);
	else console.log("Invalid day!");
}

dayOfWeek(5);