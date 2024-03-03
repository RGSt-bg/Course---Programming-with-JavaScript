function constructionCrew(inputObj) {

    if (inputObj.dizziness === true) {
        inputObj.levelOfHydrated += inputObj.weight * inputObj.experience * 0.1;
        inputObj.dizziness = false;
    }

    // return inputObj;
    console.log(inputObj);
}

constructionCrew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
console.log("---------------------------------------------------------------------");
constructionCrew({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });
console.log("---------------------------------------------------------------------");
constructionCrew({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false });