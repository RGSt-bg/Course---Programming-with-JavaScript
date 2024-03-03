import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const edtTemp = (item) => html`
      <section id="edit">
            <h2>Edit Motorcycle</h2>
            <div class="form">
              <h2>Edit Motorcycle</h2>
              <form @submit=${submitHandler} class="edit-form">
                <input
                  type="text"
                  name="model"
                  id="model"
                  value = ${item.model}
                  placeholder="Model"
                />
                <input
                  type="text"
                  name="imageUrl"
                  id="moto-image"
                  value = ${item.imageUrl}
                  placeholder="Moto Image"
                />
                <input
                type="number"
                name="year"
                id="year"
                value = "${item.year}"
                placeholder="Year"
              />
              <input
              type="number"
              name="mileage"
              id="mileage"
              value = "${item.mileage}"
              placeholder="mileage"
            />
            <input
              type="number"
              name="contact"
              id="contact"
              value = "${item.contact}"
              placeholder="contact"
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
export async function showEdit(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getSingleMotorche(id);
    ctx.render(edtTemp(data))
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const model = formData.get("model")
    const imageUrl = formData.get("imageUrl")
    const year = formData.get("year")
    const mileage = formData.get("mileage")
    const contact = formData.get("contact")
    const about = formData.get("about")

    if (!model ||
        !imageUrl ||
        !year ||
        !mileage ||
        !contact ||
        !about) {
        return window.alert("all fields are requierd!")
    }

    const id = context.params.id;

    await dataService.updateMotorche(id, {
        model,
        imageUrl,
        year,
        mileage,
        contact,
        about
    });
    context.goTo(`/details/${id}`)
}   