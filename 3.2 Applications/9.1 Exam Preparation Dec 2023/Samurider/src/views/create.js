import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const createTemp = (submitHandler) => html`
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
export function showCreate(ctx) {
    context = ctx;
    ctx.render(createTemp(submitHandler))
}

async function submitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const {
        model,
        imageUrl,
        year,
        mileage,
        contact,
        about } = Object.fromEntries(formData);

    if (!model ||
        !imageUrl ||
        !year ||
        !mileage ||
        !contact ||
        !about) {
        return window.alert("All fields sre requierd!");
    }

    await dataService.createMotorche({
        model,
        imageUrl,
        year,
        mileage,
        contact,
        about
    });

    context.goTo("/catalog");
}