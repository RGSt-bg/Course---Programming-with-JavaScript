import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTempl = (item, isOwner) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${item.imageUrl}" alt="example1" />
            <p id="details-title">${item.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">Price: €${item.price}</p>
                <p class="weight">Weight: ${item.weight} kg</p>
                <p class="top-speed">Top Speed: ${item.speed} kph</p>
                <p id="car-description">${item.about}</p>
              </div>
          ${isOwner ? html `
            <div id="action-buttons">
              <a href="/edit/${item._id}" id="edit-btn">Edit</a>
              <a @click=${delProduct} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>
          ` : window.alert("You are not a owner!")}
            </div>
          </div>
        </section>
`;

let context = null;
export async function detailsView(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getOneProduct(id);
    const isOwner = userHelper.getUserId() === data._ownerId;
    ctx.render(detailsTempl(data, isOwner));
}

async function delProduct(e) {
    e.preventDefault();
    const id = context.params.id;

    if (window.confirm("Are you sure about this?")) {
      await dataService.deleteProduct(id);
      context.goTo("/dashboard");
    }
}