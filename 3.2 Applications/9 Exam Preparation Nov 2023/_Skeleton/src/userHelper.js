function getUserData() {
    return JSON.parse(sessionStorage.getItem("userData"));
}

function setUserData(userData) {
    sessionStorage.setItem("userData", JSON.stringify(userData));
}

function removeUserData() {
    sessionStorage.removeItem("userData");
}

function getUserId() {
    const userData = getUserData();
    return userData ? userData._id : false;
}

export const userHelper = {
    getUserData,
    setUserData,
    removeUserData,
    getUserId
}
