import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { dataService } from "../dataService.js";

const editTempl = (item) => html`
        <section id="edit">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Edit Character</h2>
            <form @submit=${submitHandler} class="edit-form">
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Character Type"
              value=${item.category}
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
              value=${item[`image-url`]}
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="2"
            cols="10"
          >${item.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="2"
            cols="10"
          >${item[`additional-info`]}</textarea>
              <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="">
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
    const additionalInfo = formData.get("additional-info");
    const id = context.params.id;
    
    if (!category || !imageUrl || !description || !additionalInfo)
        return window.alert("Error");

        const updatedData = {
            category,
            'image-url': imageUrl,
            description,
            'additional-info': additionalInfo
          };

    await dataService.editProduct(id, updatedData);
    context.goTo("/details/" + `${id}`);
}