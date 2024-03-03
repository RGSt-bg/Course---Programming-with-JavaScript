import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const resultRef = document.getElementById("result");
const searchTextRef = document.getElementById("searchText");

const searchBtn = document.querySelector("button");
searchBtn.addEventListener("click", search);

const townsRef = document.getElementById("towns");
let ulElement = html`
   <ul>
      ${towns.map(town => createTownTemplate(town))}
   </ul>`;
render(ulElement, townsRef);

function search(e) {
   let searchText = searchTextRef.value;
   let townsObjRef = document.querySelectorAll("li");
   resultRef.textContent = "";
   let counter = 0;

   if (searchText === "") return;
   
   for (let i = 0; i < townsObjRef.length; i++) {
      let town = townsObjRef[i];
      
      if ((town.textContent).includes(searchText)) {
         town.className = "active";
         counter++;
      }
      else town.className = "";
   }
   resultRef.textContent = `${counter} matches found`;
}

function createTownTemplate(town) {
   return html`
       <li>${town}</li>
   `;
}
