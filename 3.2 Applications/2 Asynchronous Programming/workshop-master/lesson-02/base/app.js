// const { doc } = require("mocha/lib/reporters");

const recipesURL = "http://localhost:3030/jsonstore/cookbook/recipes";
const ingredientsURL = "http://localhost:3030/jsonstore/cookbook/details";
let recipesArr = [];
let articlePrevEl;
let articleEl;

function loadRecipes() {
    fetch(recipesURL, {method: "GET"})
    .then((result) => {
        if (!result.status === 200) {
            throw new Error("Wrong status code!");
        }
        return result.json();
    })
    .then((data) => {

        const mainURL = document.querySelector("body main");
        const loaderURL = document.querySelector("body main p");
        loaderURL.style.display = "none";

        Object.values(data).forEach(record => {
            
            recipesArr.push(record);
            articlePrevEl = document.createElement("article");
            articlePrevEl.className = "preview";

            let divClassTitleEl = document.createElement("div");
            divClassTitleEl.className = "title";

            let h2PrevEl = document.createElement("h2");
            h2PrevEl.textContent = record.name;

            let divClassSmallEl = document.createElement("div");
            divClassSmallEl.className = "small";

            let imgSmall = document.createElement("img");
            imgSmall.setAttribute("src", record.img);

            divClassTitleEl.appendChild(h2PrevEl);
            divClassSmallEl.appendChild(imgSmall);
            
            articlePrevEl.appendChild(divClassTitleEl);
            articlePrevEl.appendChild(divClassSmallEl);
            articlePrevEl.addEventListener("click", loadOneRecipe);

            mainURL.appendChild(articlePrevEl);

        });
    });

    async function loadOneRecipe(event) {

        const mainURL = document.querySelector("body main");

        articleEl.style.display = "none";
        articlePrevEl.style.display = "none";

        let selectedRecipe = event.target.querySelector("h2").textContent;
        let recipeId = "";
        recipesArr.forEach(recipe => {
            if (selectedRecipe === recipe.name) recipeId = recipe._id;
        });
        
        let ingrResponse = await fetch(ingredientsURL + `/${recipeId}`);
        let ingredients = Object.values(await ingrResponse.json());

        articleEl = document.createElement("article");

        let h2El = document.createElement("h2");
        h2El.textContent = ingredients[1];

        let divClassBandEl = document.createElement("div");
        divClassBandEl.className = "band";

        let divClassThumbEl = document.createElement("div");
        divClassThumbEl.className = "thumb";

        let imgEl = document.createElement("img");
        imgEl.setAttribute("src", ingredients[2]);

        let divClassIngrEl = document.createElement("div");
        divClassBandEl.className = "ingredients";
        
        let h3El = document.createElement("h3");
        h3El.textContent = "Ingredients:";

        let ulEl = document.createElement("ul");
        let liEl;

        ingredients[4].forEach(ingredient => {

            liEl = document.createElement("li");
            liEl.textContent = ingredient;
            ulEl.appendChild(liEl);
        });

        divClassThumbEl.appendChild(imgEl);
        divClassBandEl.appendChild(divClassThumbEl);

        divClassIngrEl.appendChild(h3El);
        divClassIngrEl.appendChild(ulEl);
        divClassBandEl.appendChild(divClassIngrEl);

        let divClassDescrEl = document.createElement("div");
        divClassDescrEl.className = "description";
        
        h3El = document.createElement("h3");
        h3El.textContent = "Preparation:";

        divClassDescrEl.appendChild(h3El);
        let pEl;

        ingredients[3].forEach(preparation => {

            pEl = document.createElement("p");
            pEl.textContent = preparation;
            divClassDescrEl.appendChild(pEl);
        });

        articleEl.appendChild(h2El);
        articleEl.appendChild(divClassBandEl);
        articleEl.appendChild(divClassDescrEl);

        mainURL.appendChild(articleEl);

    }

}

loadRecipes();