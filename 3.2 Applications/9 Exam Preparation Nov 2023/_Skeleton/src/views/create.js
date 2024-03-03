import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { dataService } from "../dataService.js";

const addTempl = () => html`
    <!-- <form @submit=${submitHandler} ... -->
`;

let context = null;
export function createView(ctx) {
    context = ctx;
    ctx.render(addTempl());
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {/*name, imgUrl, description, ...*/} = Object.fromEntries(formData);
    // const category = formData.get("category");
    // const imageUrl = formData.get("image-url");
    // const description = formData.get("description");
    // const additionalInfo = formData.get("additional-info");

    if (/*!name || !imgUrl || !description ...*/false) //Delete FALSE!!!
        return window.alert("Error");

    await dataService.createProduct(/*name, imgUrl, description, ...*/);
    context.goTo("/path to go to");
}