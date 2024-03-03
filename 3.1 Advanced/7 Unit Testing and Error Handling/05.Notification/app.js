function notify(message) {

    let hiddenDiv = document.getElementById("notification");
    hiddenDiv.textContent = message;
    hiddenDiv.style.display = "block";

    hiddenDiv.addEventListener("click", toggleVisibility);

    function toggleVisibility() {
        hiddenDiv.style.display = "none";
    }
}