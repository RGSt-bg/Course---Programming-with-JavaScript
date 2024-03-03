import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";

const addTempl = () => html`
        <section id="create">
          <h2>Add Motorcycle</h2>
          <div class="form">
            <h2>Add Motorcycle</h2>
            <form @submit=${submitHandler} class="create-form">
              <input
                type="text"
                name="model"
                id="model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="moto-image"
                placeholder="Moto Image"
              />
              <input
              type="number"
              name="year"
              id="year"
              placeholder="Year"
            />
            <input
            type="number"
            name="mileage"
            id="mileage"
            placeholder="mileage"
          />
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="contact"
          />
            <textarea
              id="about"
              name="about"
              placeholder="about"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Motorcycle</button>
            </form>
          </div>
        </section>
`;

let context = null;
export function createView(ctx) {
    context = ctx;
    ctx.render(addTempl());
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const model = formData.get("model");
    const imageUrl = formData.get("imageUrl");
    const year = formData.get("year");
    const mileage = formData.get("mileage");
    const contact = formData.get("contact");
    const about = formData.get("about");

    if (!model || !imageUrl || !year || !mileage || !contact || !about)
        return window.alert("Error");

    const updatedData = {
        model,
        imageUrl,
        year,
        mileage,
        contact,
        about
    };
      
    await dataService.createProduct(updatedData);
    context.goTo("/dashboard");
}