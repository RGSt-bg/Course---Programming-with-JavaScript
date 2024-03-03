function tradeCommissions(input) {

    let town = input[0];
    let sumSales = Number(input[1]);
    let sumFlag = 0;

        if (sumSales < 0 || town != "Sofia" && town != "Varna" && town != "Plovdiv")
            console.log("error");
        else if (sumSales >= 0 && sumSales <= 500)
            sumFlag = 1;
        else if (sumSales > 500 && sumSales <= 1000)
            sumFlag = 2;
        else if (sumSales > 1000 && sumSales <= 10000)
            sumFlag = 3;
        else
            sumFlag = 4;
        
    switch (town) {
        case "Sofia" : {
            switch (sumFlag) {
                case 1 : console.log((sumSales * 0.05).toFixed(2));
                break;
                case 2 : console.log((sumSales * 0.07).toFixed(2));
                break;
                case 3 : console.log((sumSales * 0.08).toFixed(2));
                break;
                case 4 : console.log((sumSales * 0.12).toFixed(2));
                break;
            }}
        break;
        case "Varna" : {
            switch (sumFlag) {
                case 1 : console.log((sumSales * 0.045).toFixed(2));
                break;
                case 2 : console.log((sumSales * 0.075).toFixed(2));
                break;
                case 3 : console.log((sumSales * 0.1).toFixed(2));
                break;
                case 4 : console.log((sumSales * 0.13).toFixed(2));
                break;
            }}
        break;
        case "Plovdiv" : {
            switch (sumFlag) {
                case 1 : console.log((sumSales * 0.055).toFixed(2));
                break;
                case 2 : console.log((sumSales * 0.08).toFixed(2));
                break;
                case 3 : console.log((sumSales * 0.12).toFixed(2));
                break;
                case 4 : console.log((sumSales * 0.145).toFixed(2));
                break;
            }}
        break;
    }

}

tradeCommissions(["Kaspichan","-50"]);