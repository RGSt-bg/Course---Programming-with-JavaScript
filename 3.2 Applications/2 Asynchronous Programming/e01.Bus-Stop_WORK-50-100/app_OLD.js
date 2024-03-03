async function getInfo() {
    const submitBtnRef = document.getElementById("submit");
    const mainURL = "http://localhost:3030/jsonstore/bus/businfo/";
    const stopNameRef = document.getElementById("stopName");
    const busesRef = document.getElementById("buses");

    const stopIdRef = document.getElementById("stopId");
    stopIdVal = stopIdRef.value;

    let busResponse = await fetch(mainURL + stopIdVal);
    if (busResponse.status === 200 && typeof(busResponse) === "object") {debugger
        let busInfo = await busResponse.json();

        busesRef.innerHTML = "";
        let [busObj, stopName] = Object.values(busInfo);
        stopNameRef.textContent = stopName;
        stopIdRef.value = "";
        busesRef.innerHTML = "";
        let liEl;

        for (const [busId, time] of Object.entries(busObj)) {

            li = document.createElement("li");
            li.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesRef.appendChild(li);
        }
    }
    else {
        busesRef.innerHTML = "";
        stopNameRef.textContent = "Error";
    }
}

module.exports = {getInfo};