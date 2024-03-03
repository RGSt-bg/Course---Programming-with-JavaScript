function create(words) {

   let divContentRef = document.getElementById("content");

   for (let i = 0; i < words.length; i++) {

      let tagDiv = document.createElement("div");
      let tagPar = document.createElement("p");

      tagPar.textContent = words[i];
      tagPar.style.display = "none";
      tagDiv.appendChild(tagPar);
      tagDiv.addEventListener("click", displayDiv);

      divContentRef.appendChild(tagDiv);
   }

   function displayDiv(ev) {
      let divRef = ev.target;
      let parRef = divRef.children[0];
      parRef.style.display = "block";
   }
}