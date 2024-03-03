import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTempl = (item, isOwner) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${item.imageUrl}" alt="example1" />
            <div>
            <p id="details-category">${item.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${item.description}</p>
                   <p id ="more-info">
                    Elden Ring Heroes start off with good Vigor
                     and Endurance, so more HP and Stamina,
                      meaning they're at least a little tanky
                       and agile too. You can boost these Attributes
                        more in the early levels to make the Hero more
                         balanced or can focus purely on Strength to up
                          your damage as much as you can.
                        </p>
              </div>
            </div>
              <h3>Is This Useful:<span id="likes">0</span></h3>
                    <div id="action-buttons">
                      ${isOwner ? html `
                        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                        <a @click=${delProduct} href="javascript:void(0)" id="delete-btn">Delete</a>
                      ` : ""}
                        ${!isOwner ? html `
                        <a href="" id="like-btn">Like</a>
                        ` : ""}
                    </div>
            </div>
          </div>
        </section>
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