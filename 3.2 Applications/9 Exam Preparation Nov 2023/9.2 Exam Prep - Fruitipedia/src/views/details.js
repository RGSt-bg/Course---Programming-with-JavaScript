import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTempl = (item, isOwner) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${item.imageUrl}" alt="example1" />
            <p id="details-title">${item.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${item.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${item.nutrition}</p>
              </div>
          ${isOwner ? html `
            <div id="action-buttons">
              <a href="/edit/${item._id}" id="edit-btn">Edit</a>
              <a @click=${delProduct} href="" id="delete-btn">Delete</a>
            </div>
          ` : ""}
            </div>
          </div>
        </section>
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
    context.goTo("/dashboard");
}