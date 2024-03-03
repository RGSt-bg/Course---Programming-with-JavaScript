function deleteByEmail() {
    
    let emailArr = Array.from(document.querySelectorAll("#customers td"));
    let requestedEmail = document.getElementsByName("email")[0].value;

    for (let i = 1; i < emailArr.length; i += 2) {

        if (requestedEmail === emailArr[i].textContent) {
            emailArr[i].parentNode.parentNode.removeChild(emailArr[i].parentNode);
            document.getElementById("result").textContent = "Deleted.";
            return;
        }
        document.getElementById("result").textContent = "Not found.";
    }
}