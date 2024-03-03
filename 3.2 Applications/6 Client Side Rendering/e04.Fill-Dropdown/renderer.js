import { html, render } from "../../../node_modules/lit-html/lit-html.js";
const menuRef = document.getElementById("menu");

export function createDropDown(itemsInfo) {
    let optionEl = Object.values(itemsInfo).map(data => dropDownRender(data._id, data.text));
    render(optionEl, menuRef);
}

function dropDownRender(id, text) {
    return html`
    <option value="${id}">${text}</option>
    `;
}