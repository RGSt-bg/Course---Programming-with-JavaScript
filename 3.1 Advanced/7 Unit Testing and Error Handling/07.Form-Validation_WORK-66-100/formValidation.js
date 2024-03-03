function validate() {
    
    let submitBtnRef = document.getElementById("submit");
    let userNameRef = document.getElementById("username");
    let emailRef = document.getElementById("email");
    let passwordRef = document.getElementById("password");
    let confirmPasswordRef = document.getElementById("confirm-password");
    let isCompanyRef = document.getElementById("company");
    let companyInfoRef = document.getElementById("companyInfo");
    let companyNumberRef = document.getElementById("companyNumber");
    let divValid = document.getElementById("valid");

    submitBtnRef.addEventListener("click", onClickSubmitBtn);
    isCompanyRef.addEventListener("click", changeIsCompany);

    let userNamePattern = /^[a-zA-Z0-9]{3,20}$/;
    let emailPattern = /[\w\d]+@[\w\d]+.[\w\d]+/;
    let passwordPattern = /^[a-zA-Z0-9_]{5,15}$/;
    let flagValid = true;

    function onClickSubmitBtn(event) {
        event.preventDefault();
        flagValid = true;
        resetFieldStyles();
        changeName(userNameRef.value);
        changeEmail(emailRef.value);
        if (passwordRef.value !== confirmPasswordRef.value) {
            passwordRef.style.borderColor = "red";
            confirmPasswordRef.style.borderColor = "red";
            flagValid = false;
        }
        else {
            changePassword("password", passwordRef.value);
            changePassword("confirm", confirmPasswordRef.value);
        }
        if (isCompanyRef.checked === true) changeCompany(companyNumberRef.value);
    
        if (flagValid) divValid.style.display = "block";
        else divValid.style.display = "none";
    }

    function changeName(userName) {
        if (!userNamePattern.test(userName)) {
            userNameRef.style.borderColor = "red";
            flagValid = false;
        }
        else userNameRef.style.borderColor = "";
    }

    function changeEmail(email) {
        if (!emailPattern.test(email)) {
            emailRef.style.borderColor = "red";
            flagValid = false;
        }
        else emailRef.style.borderColor = "";
    }

    function changePassword(state, password) {
        if (!passwordPattern.test(password)) {
            if (state === "password") passwordRef.style.borderColor = "red";
            else confirmPasswordRef.style.borderColor = "red";
            flagValid = false;
        }
        else {
            if (state === "password") passwordRef.style.borderColor = "";
            else confirmPasswordRef.style.borderColor = "";
        }
    }

    function changeIsCompany() {
        if (isCompanyRef.checked === true) {
            companyInfoRef.style.display = "block";
            // flagValid = false;
        }
        else {
            companyInfoRef.style.display = "none";
            companyNumberRef.style.borderColor = "";
        }
    }

    function changeCompany(companyNumber) {
        if (companyNumber < 1000 || companyNumber > 9999 || companyNumber === "") {
            companyNumberRef.style.borderColor = "red";
            flagValid = false;
        }
        else companyNumberRef.style.borderColor = "";
    }

    function resetFieldStyles() {
        userNameRef.style.borderColor = "";
        emailRef.style.borderColor = "";
        passwordRef.style.borderColor = "";
        confirmPasswordRef.style.borderColor = "";
        companyNumberRef.style.borderColor = "";
    }    
}
