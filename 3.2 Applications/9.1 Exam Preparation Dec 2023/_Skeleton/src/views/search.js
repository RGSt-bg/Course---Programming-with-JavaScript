import { dataService } from "../dataService.js";
import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

const searchTempl = (data, isResult) => html`
    <!-- <form @submit=${submitHandler} class="......."> -->
`;

const result = () => html`

`;

let context = null;
export function searchView(ctx) {
    context = ctx;
    searchManager();
}

function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {search} = Object.fromEntries(formData);

    if (!search) return window.alert("Error");

    searchManager(search);
}

async function searchManager(query) {
    if (query) {
        const data = await dataService.searchProduct(query);
        return context.render(searchTempl(data, true));
    }
    context.render(searchTempl());
}