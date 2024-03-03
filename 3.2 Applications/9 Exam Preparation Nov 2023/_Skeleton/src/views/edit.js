import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { dataService } from "../dataService.js";

const editTempl = (item) => html`
    <!-- <form @submit=${submitHandler} class="......."> -->
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
    const {/*name, imgUrl, description, ...*/} = Object.fromEntries(formData);
    const id = context.params.id;
    
    if (/*!name || !imgUrl || !description ...*/false) //Delete "false"!!!
        return window.alert("Error");

    await dataService.updateProduct(/*id, {name, imgUrl, description, ...}*/);
    context.goTo("/path to go to");
}