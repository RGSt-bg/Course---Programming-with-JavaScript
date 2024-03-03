function trainTheTrainers(input)
{
	let arrLength = input.length;
	let i = 0;
    let assessmentCount = Number(input[i]);
    let assessmentSum = 0.00;
    let assessmentAll = 0.00;
    let tmpCount = 0;
    let allCount = 0;

    for (let j = 1; j < arrLength; j = j + assessmentCount + 1)
	{
        let namePresentation = input[j];
    	if (namePresentation != "Finish")
        {
            tmpCount = j + assessmentCount;
            for (i = j; i < tmpCount; i++)
            {
               let assessment = Number(input[i+1]);
               assessmentSum = assessmentSum + assessment;
               assessmentAll = assessmentAll + assessment;
               allCount++;
            }
            assessmentSum = assessmentSum / assessmentCount;
            console.log(`${namePresentation} - ${assessmentSum.toFixed(2)}.`);
            assessmentSum = 0;
        }
        else
        {
            assessmentAll = assessmentAll / allCount;
            console.log(`Student's final assessment is ${assessmentAll.toFixed(2)}.`)
        }
    }
        
}

trainTheTrainers(["2","Objects and Classes","5.77","4.23","Dictionaries","4.62","5.02","RegEx","2.88","3.42","Finish"]);