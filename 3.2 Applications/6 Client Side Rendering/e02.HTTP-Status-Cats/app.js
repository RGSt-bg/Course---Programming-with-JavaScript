import { cats } from "./catSeeder.js";
import { html, render } from "../../../node_modules/lit-html/lit-html.js";

const allCatsRef = document.getElementById("allCats");

let ulElement = html`
    <ul>
        ${cats.map(cat => catsTemplate(cat))}
    </ul>`;
render(ulElement, allCatsRef);

const allBtnsRef = document.getElementById("allCats").querySelectorAll(".showBtn");
Array.from(allBtnsRef).map(btn => {
    btn.addEventListener("click", () => showDetails(btn.getAttribute("data-id")));
});

function catsTemplate(cat) {
    return html`
            <li>
                <img src="./images/${cat.imageLocation}.jpg" data-id=${cat.id} width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" data-id=${cat.id}>Show status code</button>
                    <div class="status" style="display: none" id=${cat.id}>
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>`;
}

function showDetails(catId) {
    let detailsDiv = document.getElementById(catId);
    let showBtnText = detailsDiv.parentElement.querySelector(".showBtn");
    detailsDiv.style.display = (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') ? 'block' : 'none';
    showBtnText.textContent = (showBtnText.textContent === "Show status code" ? "Hide status code" : "Show status code");
}

