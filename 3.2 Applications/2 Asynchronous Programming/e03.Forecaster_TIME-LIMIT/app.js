function attachEvents() {
    const locationURL = "http://localhost:3030/jsonstore/forecaster/locations/";
    const currentWeatherURL = "http://localhost:3030/jsonstore/forecaster/today/";
    const threeDaysURL = "http://localhost:3030/jsonstore/forecaster/upcoming/";
    const locationRef = document.getElementById("location");
    const getLocationBtnRef = document.getElementById("submit");
    const forecastRef = document.getElementById("forecast");

    getLocationBtnRef.addEventListener("click", getLocation);

    let locationCode = "";
    let locationName = "";

    async function getLocation(event) {

        forecastRef.style = "display:none";
        forecastRef.innerHTML = `<div id="current">
                                    <div class="label">Current conditions</div>
                                </div>
                                <div id="upcoming">
                                    <div class="label">Three-day forecast</div>
                                </div>`;

        let isLocationExist = true;
        let location = locationRef.value;
        if (!location) return throwsError();
        let locationResponse = await fetch(locationURL);
        if (!locationResponse === 200) return throwsError();
        let locationInfo = await locationResponse.json();
        for (let i = 0; i < locationInfo.length; i++) {
            if (location === Object.values(locationInfo[i])[1]) {
                [locationCode, locationName] = Object.values(locationInfo[i]);
                if (!locationCode || !locationName) return throwsError();
                forecastRef.style = "display:block";
                locationRef.value = "";
                isLocationExist = true;
                const getCurrentWeatherRef = document.getElementById("current");
                const get3DaysWeatherRef = document.getElementById("upcoming");
                getCurrentWeather(getCurrentWeatherRef);
                get3DaysWeather(get3DaysWeatherRef);
                return;
            }
            else isLocationExist = false;
        }
        if (!isLocationExist) return throwsError();
    }

    async function getCurrentWeather(getCurrentWeatherRef) {
        let currentResponse = await fetch(currentWeatherURL);
        if (!currentResponse === 200) return;
        let currentInfo = await currentResponse.json();
        let cityForecast = currentInfo[locationCode].forecast;
        let cityName = currentInfo[locationCode].name;

        let currentDom = createSpanElement(cityName, cityForecast);
        getCurrentWeatherRef.appendChild(currentDom);
        return;
    }

    async function get3DaysWeather(get3DaysWeatherRef) {
        let threeDaysResponse = await fetch(threeDaysURL);
        if (!threeDaysResponse === 200) return;
        let threeDaysInfo = await threeDaysResponse.json();
        let threeDaysCityForecast = threeDaysInfo[locationCode].forecast;
        let threeDaysCityName = threeDaysInfo[locationCode].name;

        let currentDom = createSpanElement(threeDaysCityName, threeDaysCityForecast);
        get3DaysWeatherRef.appendChild(currentDom);
        return;
    }

    function createSpanElement(name, forecast) {
        let divElement = document.createElement("div");
        let spanElement = document.createElement("span");
        if (!(forecast && forecast.length !== undefined)) {
            let lowT = forecast.low + chooseSymbol("Degrees");
            let highT = forecast.high + chooseSymbol("Degrees");
            let bothTemps = lowT + '/' + highT;
            divElement.className = "forecasts";
            divElement.innerHTML = 
            `<span class="condition symbol">${chooseSymbol(forecast.condition)}</span>
            <span class="condition">
                <span class="forecast-data">${name}</span>
                <span class="forecast-data">${bothTemps}</span>
                <span class="forecast-data">${forecast.condition}</span>
            </span>`;
            return divElement;
        }
        else {
            divElement.className = "forecast-info";
            forecast.forEach(element => {
                spanElement = document.createElement("span");
                spanElement.className = "upcoming";
                lowT = element.low + chooseSymbol("Degrees");
                highT = element.high + chooseSymbol("Degrees");
                bothTemps = lowT + '/' + highT;
                spanElement.innerHTML = 
                `<span class="symbol">${chooseSymbol(element.condition)}</span>
                <span class="forecast-data">${bothTemps}</span>
                <span class="forecast-data">${element.condition}</span>`;
                divElement.appendChild(spanElement);
            });
        }
        return divElement;
    }

    function chooseSymbol(condition) {
        let symbol = "";
        switch (condition) {
            case "Sunny": symbol = convertSymbol("&#x2600"); break;
            case "Partly sunny": symbol = convertSymbol("&#x26C5"); break;
            case "Overcast": symbol = convertSymbol("&#x2601"); break;
            case "Rain": symbol = convertSymbol("&#x2614"); break;
            case "Degrees": symbol = convertSymbol("&#176"); break;
        }
        return symbol;
    }

    function convertSymbol(symbol) {
        let txtArea = document.createElement("textarea");
        txtArea.innerHTML = symbol;
        return txtArea.value;
    }

    function throwsError() {
        locationRef.value = "";
        forecastRef.style = "display:block";
        forecastRef.textContent = "Error";
        return;
    }
}

attachEvents();