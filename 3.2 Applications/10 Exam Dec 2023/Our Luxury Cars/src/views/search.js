import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";

const searchTempl = (data, isResult) => html`
        <section id="search">
          <div class="form">
            <h4>Search</h4>
            <form @submit=${submitHandler} class="search-form">
              <input type="text" name="search" id="search-input" />
              <button class="button-list">Search</button>
            </form>
          </div>
          ${isResult && result(data)}
       </section>
`;

const result = (items) => html`
      <div class="search-result">
          ${items.length == 0 ?
            html`
              <h2 class="no-avaliable">No result.</h2>` :
              items.map(item => productCard(item))}
      </div>
`;

const productCard = (item) => html`
            <div class="car">
              <img src="${item.imageUrl}" alt="example1"/>
              <h3 class="model">${item.model}</h3>
              <a class="details-btn" href="/details/${item._id}">More Info</a>
            </div>
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