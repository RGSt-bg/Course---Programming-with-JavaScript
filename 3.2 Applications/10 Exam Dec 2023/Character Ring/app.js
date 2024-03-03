import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";

import { userHelper } from "./src/userHelper.js";
import { userService } from "./src/userService.js";
import { registerView} from "./src/views/register.js";
import { loginView } from "./src/views/login.js";
import { homeView } from "./src/views/home.js";
import { dashboardView } from "./src/views/dashboard.js";
import { detailsView } from "./src/views/details.js";
import { createView } from "./src/views/create.js";
import { editView } from "./src/views/edit.js";
// import { searchView } from "./src/views/search.js";

const root = document.querySelector("main");
const userRef = document.querySelector(".user");
const guestRef = document.querySelector(".guest");

page(decorationContext);
page("/", homeView);
page("/home", homeView);
page("/register", registerView);
page("/login", loginView);
page("/logout", logout);
page("/dashboard", dashboardView);
page("/details/:id", detailsView);
page("/create", createView);
page("/edit/:id", editView);
// page("/search", searchView); // Here be very careful!
// ... and so on!

page.start();
updateNav();
goTo("/");

async function logout() {
    await userService.logout();
    updateNav();
    goTo("/");
}

function renderer(template) {
    render(template, root);
}

function updateNav() {
    const userData = userHelper.getUserData();
    if (userData) {
        userRef.style.display = "block";
        guestRef.style.display = "none";
    }
    else {
        userRef.style.display = "none";
        guestRef.style.display = "block";
    }
}

function goTo(path) {
    page.redirect(path);
}

function decorationContext(ctx, next) {
    ctx.render = renderer;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;

    next();
}