import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { dataService } from "../dataService.js";

const dashboardTempl = (data) => html`
    <!-- If it possible, use this check:
        ${data.length > 0 ?
            html `section/div/other
                    ${data.map(item => productCard(item))}
                  section/div/other` :
            html `<TAG> Text here </TAG>`
        // Attention: change the link to the button "Details"!
        }
    -->
`;

const productCard = (item) => html`

`;

export async function dashboardView(ctx) {
    const data = await dataService.getAllProducts();
    ctx.render(dashboardTempl(data));
}