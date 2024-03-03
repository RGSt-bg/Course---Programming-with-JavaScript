import { contacts } from "./contacts.js";
import { render } from "../../../node_modules/lit-html/lit-html.js";
import { createCardTemplate } from "./templates/cardTemplate.js";

function createCard() {
    const contactsRef = document.getElementById("contacts");
    contacts.forEach(contact => {
        let cardTemplate = createCardTemplate(contact.id, contact.name, contact.phoneNumber, contact.email);
        let card = document.createElement("div");
        render(cardTemplate, card);
        contactsRef.appendChild(card);
    });
}

export function showDetails(event) {
    const id = event.target.parentElement.querySelector('.details').id;
    const detailsDiv = document.getElementById(id);
    detailsDiv.style.display = 'block';
}

createCard();