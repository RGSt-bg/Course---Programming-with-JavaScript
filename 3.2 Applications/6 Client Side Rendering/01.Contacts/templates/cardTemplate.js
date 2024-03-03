import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { showDetails } from "../app.js";

export const createCardTemplate = (id, name, phone, email) => {
    return html`
    <div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>Name: ${name}</h2>
            <button class="detailsBtn" @click=${showDetails}>Details</button>
            <div class="details" id="${id}" style="display: none;">
                <p>Phone number: ${phone}</p>
                <p>Email: ${email}</p>
            </div>
        </div>
    </div>`;
}