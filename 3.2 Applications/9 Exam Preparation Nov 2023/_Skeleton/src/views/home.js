import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

const homeTempl = () => html`

`;

export function homeView(ctx) {
    ctx.render(homeTempl());
}