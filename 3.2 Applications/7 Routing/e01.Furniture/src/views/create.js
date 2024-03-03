import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { dataService } from "../dataService.js";

const addTempl = () => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${submitHandler}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
`;

let context = null;
export function createView(ctx) {
    context = ctx;
    ctx.render(addTempl());
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {make, model, year, description, price, img, material} = Object.fromEntries(formData);

    if (!make || !model || !year || !description || !price || !img)
        return window.alert("Fill all fields!");

    if (make.length < 4 || model.length < 4) {
        return window.alert("Make and model must be at least 4 symbols long!");
    }

    if (Number(year) < 1950 || Number(year) > 2050) {
        return window.alert("Year must be between 1950 and 2050!");
    }
    
    if (description.length <= 10) {
        return window.alert("Description must be more than 10 symbols!");
    }

    if (Number(price) <= 0) {
        return window.alert("Price must be a positive number!");
    }

    if (img === "") {
        return window.alert("Image URL is required!");
    }

    await dataService.createProduct({make, model, year, description, price, img, material});
    context.goTo("/dashboard");
}