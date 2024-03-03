import { api } from "./api.js";

const dataEndpoints = {
    getAll: "/data/motorcycles?sortBy=_createdOn%20desc",
    oneProduct: "/data/motorcycles/"
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
    return api.get(`/data/motorcycles?where=model%20LIKE%20%22${query}%22`);
}

export const dataService = {
    getAllProducts,
    getOneProduct,
    createProduct,
    editProduct,
    deleteProduct,
    searchProduct
}