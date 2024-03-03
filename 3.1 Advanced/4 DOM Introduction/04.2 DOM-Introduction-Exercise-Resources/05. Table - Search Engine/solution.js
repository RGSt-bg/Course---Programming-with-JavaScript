function solve() {
   
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rowArr = Array.from(document.querySelectorAll("tbody tr"));
   let searchField = document.getElementById("searchField");

   function onClick() {
      let searchText = searchField.value;
      if (searchText === "") return;
      for (let i = 0; i < rowArr.length; i++) {

         let cellArr = rowArr[i].querySelectorAll("td");
         for (let j = 0; j < cellArr.length; j++) {
            
            if ((cellArr[j].textContent).includes(searchText, 0)) {
               rowArr[i].className = "select";
               break;
            }
            else rowArr[i].classList.remove('select');
         }
      }
      document.getElementById("searchField").value = "";
   }
}