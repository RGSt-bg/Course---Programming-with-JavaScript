import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";

const dashboardTempl = (data) => html`
        <h2>Characters</h2>
        <section id="characters">
        ${data.length > 0 ?
            html `<div class="character">
                    ${data.map(item => productCard(item))}
                </div>` :
            html `<h2>No added Heroes yet.</h2>`

        }
`;

const productCard = (item) => html`
            <img src="${item.imageUrl}" alt="example2" />
            <div class="hero-info">
              <h3 class="category">${item.category}</h3>
              <p class="description">${item.description}</p>
              <a class="details-btn" href="/details/${item._id}">More Info</a>
            </div>`;

export async function dashboardView(ctx) {
    const data = await dataService.getAllProducts();
    ctx.render(dashboardTempl(data));
}