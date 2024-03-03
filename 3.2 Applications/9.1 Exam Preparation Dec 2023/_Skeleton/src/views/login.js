import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { userService } from "../userService.js";

const loginTempl = () => html`
    <!-- <form @submit=${submitHandler} class="......."> -->
`;

let context = null;
export function loginView(ctx) {
    ctx.render(loginTempl());
    context = ctx;
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const rePass = formData.get("re-password");

    if (!email || !password) // BE VERY CAREFUL with validations!
        return window.alert("Error");

    await userService.login(email, password);
    context.updateNav();
    context.goTo("/");
}
