function onTime(input)
{
	let hourExam = Number(input[0]);
	let minuteExam = Number(input[1]);
	let hourArriving = Number(input[2]);
	let minuteArriving = Number(input[3]);
	let hour = 0;
	let minute = 0;
	let minuteDiff = 0;
	
	if (hourExam * 60 + minuteExam < hourArriving * 60 + minuteArriving)
	{
		minuteDiff = hourArriving * 60 + minuteArriving - hourExam * 60 - minuteExam;
		if (minuteDiff >= 60)
			{
				hour = Math.floor(minuteDiff / 60);
				minute = minuteDiff % 60;
				if (minute < 10) minute = "0"+ minute;
				console.log("Late");
				console.log(`${hour}:${minute} hours after the start`);
			}
		else
			{
				hour = 0;
				minute = minuteDiff;
				console.log("Late");
				console.log(`${minute} minutes after the start`);
			}
	}
	else if (hourExam * 60 + minuteExam >= hourArriving * 60 + minuteArriving)
	{
		minuteDiff = hourExam * 60 + minuteExam - hourArriving * 60 - minuteArriving;
		if (minuteDiff >= 60)
			{
				hour = Math.floor(minuteDiff / 60);
				minute = minuteDiff % 60;
				if (minute < 10) minute = "0"+ minute;
				console.log("Early");
				console.log(`${hour}:${minute} hours before the start`);
			}
		else if (minuteDiff > 30 && minuteDiff < 60)
			{
				minute = minuteDiff;
				console.log("Early");
				console.log(`${minute} minutes before the start`);
			}
		else
			{
				minute = minuteDiff;
				console.log("On time");
				if (minute != 0) console.log(`${minute} minutes before the start`);
			}
	}
}

onTime(["11","30","12","29"]);