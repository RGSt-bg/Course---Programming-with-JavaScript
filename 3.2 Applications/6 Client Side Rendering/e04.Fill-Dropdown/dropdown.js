import { getItems, postItems } from "./api.js";

const textRef = document.getElementById("itemText");
const submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener("click", addItem);

getItems();

function addItem(event) {
    // const formData = new FormData(event.target.parentElement); //NOT WORK!!!
    // const {text, btn} = Object.fromEntries(formData); // And I don't know why!!!
    // let formData = new FormData(textRef.parentElement);
    event.preventDefault();
    let newItemText = textRef.value;
    postItems(newItemText);
    textRef.value = "";
    getItems();
}