function solve() {

    const mainURL = "http://localhost:3030/jsonstore/bus/schedule/";
    let stopNameRef = document.getElementById("info").children[0];
    const departBtnRef = document.getElementById("depart");
    const arriveBtnRef = document.getElementById("arrive");
    let nextStopId = "depot";
    let currentStopName = "";
    let text = "Next stop ";

    function depart() {
        departBtnRef.disabled=true;
        arriveBtnRef.disabled=false;
        getInfo();
    }

    function arrive() {
        departBtnRef.disabled=false;
        arriveBtnRef.disabled=true;
        getInfo();
    }

    async function getInfo() {
        let busResponse = await fetch(mainURL + nextStopId);
        if (busResponse.status === 200) {
            let stopInfo = await busResponse.json();
            [currentStopName, nextStopId] = Object.values(stopInfo);
            if (!currentStopName || !nextStopId) throwsError();
            if (departBtnRef.disabled === true) text = "Next stop ";
            else text = "Arriving at ";
            stopNameRef.textContent = `${text}${currentStopName}`;
        }
        else throwsError();
    }

    function throwsError() {
        departBtnRef.disabled=true;
        arriveBtnRef.disabled=true;
        stopNameRef.textContent = "Error";
    }

    return {
        depart,
        arrive
    };
}

let result = solve();