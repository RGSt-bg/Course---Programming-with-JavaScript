import { createDropDown } from "./renderer.js";

const mainURL = "http://localhost:3030/jsonstore/advanced/dropdown/";

export async function getItems() {
    let itemsResponse = await fetch(mainURL);
    if (itemsResponse.status === 200) {
        let itemsInfo = await itemsResponse.json();
        createDropDown(itemsInfo);
    }
}

export async function postItems(inputText) {
    await fetch(mainURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"text": `${inputText}` }),
    })
}