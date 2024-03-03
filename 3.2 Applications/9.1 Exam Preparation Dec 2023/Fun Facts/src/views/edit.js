import { html } from "../../node_modules/lit-html/lit-html.js";

import { dataService } from "../dataService.js";

const editTempl = (item) => html`
        <!-- Edit Page (Only for logged-in users) -->
        <section id="edit">
          <div class="form">
            <h2>Edit Fact</h2>
            <form @submit=${submitHandler} class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              value="${item.category}"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
              value="${item.imageUrl}"
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
          >${item.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="10"
            cols="50"
          >${item.moreInfo}</textarea>
              <button type="submit">Post</button>
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
    const category = formData.get("category");
    const imageUrl = formData.get("image-url");
    const description = formData.get("description");
    const moreInfo = formData.get("additional-info");
    const id = context.params.id;
    
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

    await dataService.editProduct(id, updatedData);
    context.goTo(`/details/${id}`);
}