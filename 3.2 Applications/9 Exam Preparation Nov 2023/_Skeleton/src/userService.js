import { api } from "./api.js";
import { userHelper } from "./userHelper.js";

const userEndpoints = {
    login: "*loginEndpoint*", // Fill the endpoints!!!
    register: "*registerEndpoint",
    logout: "*logoutEndpoint"
}

async function register(email, username, password) { // BE VERY CAREFUL with accepted params - two or three!
    const data = await api.post(userEndpoints.register, {email, username, password});
    userHelper.setUserData(data);
}

async function login(email, password) {
    const data = await api.post(userEndpoints.login, {email, password});
    userHelper.setUserData(data);
}

async function logout() {
    await api.get(userEndpoints.logout);
    userHelper.removeUserData();
}

export const userService = {
    register,
    login,
    logout
}