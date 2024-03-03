import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTempl = (item, isOwner) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${item.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${item.make}</span></p>
                <p>Model: <span>${item.model}</span></p>
                <p>Year: <span>${item.year}</span></p>
                <p>Description: <span>${item.description}</span></p>
                <p>Price: <span>${item.price}</span></p>
                <p>Material: <span>${item.material}</span></p>
                <div>
                ${isOwner ? html `
                    <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
                    <a href=”/delete” @click=${delProduct} class="btn btn-red">Delete</a>
                ` : ""}
                </div>
            </div>
        </div>
`;

let context = null;
export async function detailsView(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getOneProduct(id);
    // const isOwner = userHelper.getUserId() === data._ownerId;
    // const isOwner = await userHelper.getUserId() === data._ownerId || false;
    const isOwner = false;
    if (userHelper.getUserId() === data._ownerId) isOwner = true;
    debugger
    ctx.render(detailsTempl(data, isOwner));
    debugger
}

async function delProduct(e) {
    e.preventDefault();
    const id = context.params.id;
    await dataService.deleteProduct(id);
    context.goTo("/dashboard");
}