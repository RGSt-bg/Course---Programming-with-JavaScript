function addItem() {

    let text = document.getElementById("newItemText").value;
    if (text !== "") {
        let li = document.createElement("li");
        let element = document.createTextNode(text);
        li.appendChild(element);
        document.getElementById("items").appendChild(li);
        document.getElementById("newItemText").value = "";
    }
}