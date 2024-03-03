async function getInfo() {
    const mainURL = "http://localhost:3030/jsonstore/bus/businfo/";
    const stopNameRef = document.getElementById("stopName");
    stopNameRef.value = "";
    const busesRef = document.getElementById("buses");
    busesRef.innerHTML = "";

    const stopIdRef = document.getElementById("stopId");
    stopIdVal = stopIdRef.value;
    if (!stopIdVal) return throwError();
    stopIdRef.value = "";

    try {
    let busResponse = await fetch(mainURL + stopIdVal);
    if (busResponse.status === 200) {
        let busInfo = await busResponse.json();

        busesRef.innerHTML = "";
        let [busObj, stopName] = Object.values(busInfo);
        stopNameRef.textContent = stopName;

        for (const [busId, time] of Object.entries(busObj)) {

            let li = document.createElement("li");
            li.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesRef.appendChild(li);
        }
    }
    else return throwError();
    }
    catch(e) {
        throwError();
    }
    function throwError() {
        busesRef.innerHTML = "";
        stopNameRef.textContent = "Error";
        stopIdRef.value = "";
    }
}

// module.exports = {getInfo};