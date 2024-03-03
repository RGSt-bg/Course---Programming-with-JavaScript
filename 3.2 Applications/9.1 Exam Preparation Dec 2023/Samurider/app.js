import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";

import { userHelper } from "./src/userHelper.js";
import { userService } from "./src/userService.js";

import { showHome } from "./src/views/home.js";
import { showLogin } from "./src/views/login.js";
import { showRegister } from "./src/views/register.js";
import { showCatalog } from "./src/views/catalog.js";
import { showCreate } from "./src/views/create.js";
import { showDetails } from "./src/views/details.js";
import { showEdit } from "./src/views/edit.js";
import { showSearch } from "./src/views/search.js";


const root = document.querySelector('main')
const userNav = document.querySelector('.user')
const guestNav = document.querySelector('.guest')

page(decorationContext);
page("/", showHome);
page("/home", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/logout", logout);
page("/catalog", showCatalog);
page("/create", showCreate);
page("/details/:id", showDetails);
page("/edit/:id", showEdit);

page("/search", showSearch);

page.start();
updateNav();

async function logout() {
    await userService.logout();
    updateNav();
    goTo("/");
}

function renderer(template) {
    render(template, root )
}

function updateNav () {
    const userData = userHelper.getUserData();
    if(userData) {
        userNav.style.display = "block"
        guestNav.style.display = "none"
        
    } else{
        userNav.style.display = "none"
        guestNav.style.display = "block"
    }
}

function goTo (path) {
    page.redirect(path)
}

function decorationContext(ctx, next) {
    ctx.render = renderer;
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;

    next();
}