import { api } from "./api.js";

const dataEndpoints = {
    getAll: "data/characters?sortBy=_createdOn%20desc",
    oneProduct: "data/characters/"
}

async function getAllProducts() {
    return api.get(dataEndpoints.getAll);
}

async function getOneProduct(id) {
    return api.get(dataEndpoints.oneProduct + id);
}

async function createProduct(data) {
    return api.post(dataEndpoints.oneProduct, data);
}

async function editProduct(id, data) {
    return api.put(dataEndpoints.oneProduct + id, data);
}

async function deleteProduct(id) {
    return api.del(dataEndpoints.oneProduct + id);
}

async function searchProduct(query) {
    return api.get(/*`searchQuery with word/phrase "query"`*/);
}

export const dataService = {
    getAllProducts,
    getOneProduct,
    createProduct,
    editProduct,
    deleteProduct,
    searchProduct
}