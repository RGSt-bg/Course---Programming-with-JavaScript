import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";

const editTempl = (item) => html`
            <section id="edit">
            <h2>Edit Motorcycle</h2>
            <div class="form">
              <h2>Edit Motorcycle</h2>
              <form @submit=${submitHandler} class="edit-form">
                <input
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Model"
                  value="${item.model}"
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="moto-image"
                  placeholder="Moto Image"
                  value="${item.imageUrl}"
                />
                <input
                type="number"
                name="year"
                id="year"
                placeholder="Year"
                value="${item.year}"
              />
              <input
              type="number"
              name="mileage"
              id="mileage"
              placeholder="mileage"
              value="${item.mileage}"
            />
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="contact"
              value="${item.contact}"
            />
              <textarea
                id="about"
                name="about"
                placeholder="about"
                rows="10"
                cols="50"
              >${item.about}</textarea>
                <button type="submit">Edit Motorcycle</button>
              </form>
          </div>
        </section>
`;

let context = null;
export async function editView(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getOneProduct(id);
    ctx.render(editTempl(data));
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
    const id = context.params.id;
    
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

    await dataService.editProduct(id, updatedData);
    context.goTo(`/details/${id}`);
}