import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTempl = () => html`

`;

export function homeView(ctx) {
    ctx.render(homeTempl());
}