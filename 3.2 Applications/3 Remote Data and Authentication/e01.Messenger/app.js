function attachEvents() {
    const mainURL = "http://localhost:3030/jsonstore/messenger";
    const messagesRef = document.getElementById("messages");
    const nameRef = document.getElementById("controls").children[1];
    const contentRef = document.getElementById("controls").children[4];
    const submitBtnRef = document.getElementById("submit");
    const refreshBtnRef = document.getElementById("refresh");

    submitBtnRef.addEventListener("click", onSubmit);
    refreshBtnRef.addEventListener("click", onRefresh);

    async function onSubmit(event) {
        let submitObj = {};
        if (nameRef.value && contentRef.value) {
            submitObj = {
            "author": nameRef.value,
            "content": contentRef.value
          };
          let submitResponse = await fetch(mainURL, {
            "method": 'POST',
            "headers": { 'Content-type': 'application/json' },
            "body": JSON.stringify(submitObj)
            });
        }
        else return;
        onRefresh(event);
    }

    async function onRefresh(event) {
        let allMessages = "";
        let refreshResponse = await fetch(mainURL);
        if (!refreshResponse === 200) return alert("Error in response!");
        let refreshInfo = await refreshResponse.json();
        Object.values(refreshInfo).forEach(element => {
            allMessages += `${element.author}: ${element.content}\n`;
        });
        messagesRef.textContent = allMessages.trim();
        return;
    }
}

attachEvents();