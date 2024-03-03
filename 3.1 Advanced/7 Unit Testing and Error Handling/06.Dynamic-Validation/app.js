function validate() {
    
    let emailRef = document.getElementById("email");
    emailRef.addEventListener("change", onChange);
    let emailPattern = /[a-z]+@[a-z]+.[a-z]+/;

    function onChange() {
        let filledEmail = emailRef.value;
        if (!emailPattern.test(filledEmail)) emailRef.setAttribute("class", "error");
        else emailRef.removeAttribute("class");
    }
}