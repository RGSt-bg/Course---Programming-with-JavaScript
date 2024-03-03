import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";

const addTempl = () => html`
        <!-- Create Page (Only for logged-in users) -->
        <section id="create">
          <div class="form">
            <h2>Add Fact</h2>
            <form @submit=${submitHandler} class="create-form">
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fact</button>
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
    const category = formData.get("category");
    const imageUrl = formData.get("image-url");
    const description = formData.get("description");
    const moreInfo = formData.get("additional-info");

    if (!category || !imageUrl || !description || !moreInfo)
        return window.alert("Error");

    const updatedData = {
      category,
      // 'image-url' : imageUrl,
      imageUrl,
      description,
      // 'additional-info' : additionalInfo
      moreInfo
    };

    await dataService.createProduct(updatedData);
    context.goTo("/dashboard");
}