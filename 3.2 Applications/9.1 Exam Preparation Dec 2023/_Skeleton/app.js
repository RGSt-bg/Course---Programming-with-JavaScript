// BE VERY CAREFUL - in the beginning of index.html add "<script src="<path>/app.js" type="module"></script>"!
// Check and fill all A tags -> "href=/login, register, logout ..."

import page from "/*path to page!!!*/"; //PUT THE PATH TO PAGE!!!
import { render } from "./../../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { userHelper } from "./src/userHelper.js";
// import { userService } from "./src/userService.js";
// import { registerView} from "./src/views/register.js";
// import { loginView } from "./src/views/login.js";
// import { homeView } from "./src/views/home.js";
// import { dashboardView } from "./src/views/dashboard.js";
// import { detailsView } from "./src/views/details.js";
// import { createView } from "./src/views/create.js";
// import { editView } from "./src/views/edit.js";
// import { searchView } from "./src/views/search.js";

const root = document; // Tag, where I will put the views.
const userARef = document; // FORM with A tags with buttons for logged in user.
const guestARef = document; // FORM with A tags with buttons for guest.
const userRef = document; // DIV tag with buttons for logged in user.
const guestRef = document; // DIV tag with buttons for guest.

page(decorationContext);
// page("/", homeView);
// page("/home", homeView);
// page("/register", registerView);
// page("/login", loginView);
// page("/logout", logout);
// page("/dashboard", dashboardView);
// page("/details/:id", detailsView);
// page("/create", createView);
// page("/edit/:id", editView);
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
        userARef.forEach(a => a.style.display = "inline"); // Form with A tags with buttons for logged in user.
        guestARef.forEach(a => a.style.display = "none"); // Form with A tags with buttons for guest.
        userRef.style.display = "block"; // Div tag with buttons for logged in user.
        guestRef.style.display = "none"; // Div tag with buttons for guest.
    }
    else {
        userARef.forEach(a => a.style.display = "none"); // Form with A tags with buttons for logged in user.
        guestARef.forEach(a => a.style.display = "inline"); // Form with A tags with buttons for guest.
        userRef.style.display = "none"; // Div tag with buttons for logged in user.
        guestRef.style.display = "block"; // Div tag with buttons for guest.
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