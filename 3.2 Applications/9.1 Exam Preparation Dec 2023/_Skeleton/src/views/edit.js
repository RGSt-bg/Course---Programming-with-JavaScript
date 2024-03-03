import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { dataService } from "../dataService.js";

const editTempl = (item) => html`
    <!-- <form @submit=${submitHandler} class="......."> -->
    <!-- syntax of input - image-url: value="${item['image-url']}" -->
    <!-- syntax of textarea - additional-info: ${item['additional-info']} -->
`;

let context = null;
export async function editView(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getOneProduct(id);
    ctx.render(editTempl(data));
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // const {/*name, imgUrl, description, ...*/} = Object.fromEntries(formData);
    const category = formData.get("category");
    const imageUrl = formData.get("image-url");
    const description = formData.get("description");
    const additionalInfo = formData.get("additional-info");
    const id = context.params.id;
    
    if (/*!name || !imgUrl || !description ...*/false) //Delete "false"!!!
        return window.alert("Error");

    const updatedData = {
        category,
        'image-url' : imageUrl,
        description,
        'additional-info' : additionalInfo
    };

    await dataService.editProduct(id, updatedData);
    // await dataService.editProduct(id, updatedData);
    context.goTo(`/details/${id}`);
}