import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { createTownTemplate } from "./templates/townTemplate.js"

const rootRef = document.getElementById("root");
const inputRef = document.getElementById("towns");
const loadBtnRef = document.getElementById("btnLoadTowns");
loadBtnRef.addEventListener("click", getTowns);

export function getTowns(e) {
    e.preventDefault();
    let townsArr = inputRef.value.split(", ");
    // let ulElement = document.createElement("ul");
    let ulElement = html`
        <ul>
            ${townsArr.map(town => createTownTemplate(town))}
        </ul>`
    render(ulElement, rootRef);
}