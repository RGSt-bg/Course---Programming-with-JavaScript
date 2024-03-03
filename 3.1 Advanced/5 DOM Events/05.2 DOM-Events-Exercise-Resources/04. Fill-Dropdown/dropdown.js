function addItem() {
    let selectRef = document.getElementById("menu");
    let newText = document.getElementById("newItemText");
    let newValue = document.getElementById("newItemValue");

    let newOption = document.createElement("option");
    newOption.value = newValue.value;
    newOption.textContent = newText.value;
    selectRef.appendChild(newOption);

    newText.value = "";
    newValue.value = "";
}