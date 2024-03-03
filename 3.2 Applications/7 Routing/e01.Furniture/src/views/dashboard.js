import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { dataService } from "../dataService.js";

const dashboardTempl = (data) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data.length > 0 ?
                html `<div class="col-md-4">
                    ${data.map(item => productCard(item))}
                    </div>` :
                html `<h2>There is no furnitures to view!</h2>`
            }
        </div>
`;

const productCard = (item) => html`
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${item.img}" />
                <p>${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${item._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
`;

export async function dashboardView(ctx) {
    const data = await dataService.getAllProducts();
    ctx.render(dashboardTempl(data));
}