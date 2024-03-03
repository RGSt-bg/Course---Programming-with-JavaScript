import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";

const dashboardTempl = (data) => html`
        <h3 class="heading">Our Cars</h3>
        ${data.length > 0 ?
            html`
            <section id="dashboard">
                ${data.map(item => productCard(item))}
            </section>` :
            html`<h3 class="nothing">Nothing to see yet</h3>`}
        `;

const productCard = (item) => html`
          <div class="car">
            <img src="${item.imageUrl}" alt="example1" />
            <h3 class="model">${item.model}</h3>
            <div class="specs">
              <p class="price">Price: €${item.price}</p>
              <p class="weight">Weight: ${item.weight} kg</p>
              <p class="top-speed">Top Speed: ${item.speed} kph</p>
            </div>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
          </div>
`;

export async function dashboardView(ctx) {
    const data = await dataService.getAllProducts();
    ctx.render(dashboardTempl(data));
}