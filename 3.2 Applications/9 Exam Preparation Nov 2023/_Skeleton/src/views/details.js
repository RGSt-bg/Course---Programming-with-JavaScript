import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTempl = (item, isOwner) => html`
    <!-- If it possible, use this check if the logged user is owner or not:
        ${isOwner ? html `section with buttons` : ""}
        Put the item's ID in the button's HREF!
        For A tag is possible to use "href="javascript:void(0)":
        <a @click=${delProduct} href="javascript:void(0) id="delete-btn">Delete</a>
        to prevent default behavior of the tag!
    -->
`;

let context = null;
export async function detailsView(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getOneProduct(id);
    const isOwner = userHelper.getUserId() === data._ownerId; // Attention: fill the right name of "_ownerId"!
    ctx.render(detailsTempl(data, isOwner));
}

async function delProduct(e) {
    e.preventDefault();
    const id = context.params.id;
    await dataService.deleteProduct(id);
    context.goTo("/path to go to");
}