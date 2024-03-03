import { api } from "./api.js";

const dataEndpoints = {
    getAll: "data/motorcycles?sortBy=_createdOn%20desc",
    getSingle: "data/motorcycles"
}

async function getAllMotors() {
    return api.get(dataEndpoints.getAll)
}

async function createMotorche(data) {
    return api.post(dataEndpoints.getSingle, data)
}

async function getSingleMotorche(id) {
    return api.get(dataEndpoints.getSingle + "/" + id)
}

async function updateMotorche(id, data) {
    return api.put(dataEndpoints.getSingle + "/" + id, data)
}
async function deleteMotorche(id) {
    return api.del(dataEndpoints.getSingle + "/" + id)
}

async function search(query) {
    return api.get(`data/motorcycles?where=model%20LIKE%20%22${query}%22`)
}

export const dataService = {
    getAllMotors,
    createMotorche,
    getSingleMotorche,
    updateMotorche,
    deleteMotorche,
    search
}