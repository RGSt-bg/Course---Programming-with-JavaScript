function encodeAndDecodeMessages() {

    let msgToEncode = document.getElementsByTagName("p")[0].parentElement.querySelector("textarea");
    let msgToDecode = document.getElementsByTagName("p")[1].parentElement.querySelector("textarea");

    let buttonEncode = document.querySelectorAll("button")[0];
    buttonEncode.addEventListener("click", onClickEncode);

    let buttonDecode = document.querySelectorAll("button")[1];
    buttonDecode.addEventListener("click", onClickDecode);

    function onClickEncode() {
        let textToEncode = "";
        let newLetter = 0;
        for (let i = 0; i < msgToEncode.value.length; i++) {
            newLetter = msgToEncode.value.charCodeAt(i) + 1;
            textToEncode += String.fromCharCode(newLetter);
        }
        msgToDecode.value = textToEncode;
        msgToEncode.value = "";
    }

    function onClickDecode() {
        let textToEncode = "";
        let newLetter = 0;
        for (let i = 0; i < msgToDecode.value.length; i++) {
            newLetter = msgToDecode.value.charCodeAt(i) - 1;
            textToEncode += String.fromCharCode(newLetter);
        }
        msgToDecode.value = textToEncode;
    }
}