import { html } from "../../node_modules/lit-html/lit-html.js";

import { userService } from "../userService.js";

const deleteTempl = (id) => html`
        <!-- Delete Page (Only for Logged-in users) -->
        <section id="delete">
          <div class="form">
            <h2>Delete Fact</h2>
            <form @submit=${submitHandler} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button id="del-btn">Delete</button>
              <p></p>
              <button id="cancel-btn" href="/details/${id}">Cancel</button>
            </form>
          </div>
        </section>
`;

let context = null;
let delBtnRef = null;
let cancelBtnRef = null;
export function deleteView(ctx) {
    const id = ctx.params.id;
    ctx.render(deleteTempl(id));
    context = ctx;

    delBtnRef = document.getElementById("del-btn");
    delBtnRef.addEventListener("click", submitHandler)
    cancelBtnRef = document.getElementById("cancel-btn");
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);

    if (!email || !password)
        return window.alert("Error");

    await userService.login(email, password);

    if (e.target)
      delProduct(e);

    context.updateNav();
    context.goTo("/dashboard");
}

async function delProduct(e) {
  e.preventDefault();
  const id = context.params.id;
  await dataService.deleteProduct(id);
  context.goTo("/dashboard");
}