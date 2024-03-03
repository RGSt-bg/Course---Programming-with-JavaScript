function search() {

   let searchText = document.getElementById("searchText").value;
   let townsArr = Array.from(document.querySelectorAll("#towns li"));
   let counter = 0;

   townsArr.forEach(town => {
      if (town.textContent.includes(searchText, 0) === true) {
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         return counter++;
      }
      else {
         town.style.fontWeight = "normal";
         town.style.textDecoration = "none";
      }
   });
   document.getElementById("result").textContent = `${counter} matches found`;
}