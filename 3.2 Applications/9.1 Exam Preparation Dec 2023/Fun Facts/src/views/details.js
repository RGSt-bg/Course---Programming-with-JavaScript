import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTempl = (item, isOwner) => html`
        <!-- Details page -->
        <section id="details">
            <div id="details-wrapper">
              <img id="details-img" src="${item.imageUrl}" alt="example1" />
              <p id="details-category">${item.category}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p id="description">${item.description}</p>
                        <p id ="more-info">${item.moreInfo}</p>
                    </div>

                    <h3>Likes:<span id="likes">0</span></h3>

                    ${isOwner ? html`
                        <div id="action-buttons">
                            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                            <a href="/delete/${item._id}" id="delete-btn">Delete</a>
                        </div>
                    ` : 
                    html `
                        <div id="action-buttons">
                            <a href="${item._id}" id="like-btn">Like</a>
                        </div>
                    `}
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