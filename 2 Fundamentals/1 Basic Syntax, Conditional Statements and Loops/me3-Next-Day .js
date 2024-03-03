function nextDay(year, month, day)
{
	let flag = 0;
    let date = "";
    
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) flag = 1;
    if (year >= 1 && year <= 99) year = year + 1900;

    switch(month)
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        {
            if (day == 31)
            {
                day = 1;
                month ++;
            }
            else day ++;
            break;
        }
        case 12:
        {
            if (day == 31)
            {
                year++;
                month = 1;
                day = 1;
            }
            else day ++;
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11:
        {
            if (day == 30)
            {
                day = 1;
                month ++;
            }
            else day ++;
            break;
        }
        case 2:
        {
            if (flag == 1 && day == 29)
            {
                day = 1;
                month ++;
            }
            else day ++;
            break;
        }
    }
    date = year + "-" + month + "-" + day;
    console.log(date);
    //console.log(Date(year, month, day));

}

nextDay(1, 1, 1);