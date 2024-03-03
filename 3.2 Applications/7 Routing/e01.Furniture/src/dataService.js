import { api } from "./api.js";

const dataEndpoints = {
    getAll: "data/catalog/",
    oneProduct: "data/catalog/"
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

async function myProduct(id) {
    return api.get(`data/catalog?where=_ownerId%3D%22${id}%22`);
}

export const dataService = {
    getAllProducts,
    getOneProduct,
    createProduct,
    editProduct,
    deleteProduct,
    myProduct
}