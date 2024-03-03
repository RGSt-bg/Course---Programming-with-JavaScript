function attachEventsListeners() {

    let buttonsRef = Array.from(document.querySelectorAll("input[type=button]"));
    let allInputs = Array.from(document.querySelectorAll("input[type=text]"));

    buttonsRef.forEach(btn => btn.addEventListener("click", onClick));

    function onClick(event) {
        let timeVal = Number(event.target.parentElement.children[1].value);
        let unit = event.target.parentElement.children[1].id;

        switch (unit) {

            case "days": calcTime(timeVal); break;
            case "hours": calcTime(timeVal / 24); break;
            case "minutes": calcTime(timeVal / 24 / 60); break;
            case "seconds": calcTime(timeVal / 24 / 60 / 60); break;
            default: break;
        }
    }

    function calcTime(timeVal) { // In my input timeVal == days!

        allInputs[0].value = timeVal;
        let currentValue = timeVal * 24; // Convert to hours.

        for (let i = 1; i < allInputs.length; i++) {

            allInputs[i].value = currentValue;
            currentValue *= 60; // Convert to min & sec.
        }
    }
}