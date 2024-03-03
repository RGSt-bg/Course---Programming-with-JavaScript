function showText() {
    if (document.getElementById("text").style.display === "none") {
        document.getElementById("more").style.display = "none";
        document.getElementById("text").style.display = "inline";
    }
    else {
        document.getElementById("more").style.display === "inline";
        document.getElementById("text").style.display === "none";
    }
}