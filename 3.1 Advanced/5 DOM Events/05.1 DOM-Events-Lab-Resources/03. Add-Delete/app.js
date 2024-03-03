function addItem() {

    let inputText = document.getElementById("newItemText").value;
    let ul = document.getElementById("items");

    let itemText = document.createTextNode(inputText);
    let li = document.createElement("li");
    li.appendChild(itemText);

    let del = document.createElement("a");
    del.setAttribute("href", "#"); // del.href = "#";
    let delText = document.createTextNode("[Delete]");
    del.appendChild(delText);

    del.addEventListener("click", deleteItem);
    document.getElementById("newItemText").value = "";

    li.appendChild(del);
    ul.appendChild(li);

    function deleteItem() {
        li.remove();
    };
}