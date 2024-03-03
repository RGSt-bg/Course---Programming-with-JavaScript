function solve() {

  let generateBtn = document.getElementsByTagName("button")[0];
  generateBtn.addEventListener("click", OnClickGenerate);
  let byeBtn = document.getElementsByTagName("button")[1];
  byeBtn.addEventListener("click", OnClickBye);

  let tbodyRef = document.querySelector("tbody");
  let [inputTextRef, outputTextRef] = document.querySelectorAll("textarea");

  let tagTr;
  let tagImg;
  let tagInput;
  let imgFlag = false;
  let furnitureArr = [];

  function OnClickGenerate() {
    if (!inputTextRef.value) return;
    furnitureArr = JSON.parse(inputTextRef.value);
    furnitureArr.forEach(furniture => {
      tagTr = document.createElement("tr");
      tagImg = document.createElement("img");
      let imgFurniture = furniture.img;
      imgFlag = true;
      createTd(imgFurniture);
      let nameFurniture = furniture.name;
      createTd(nameFurniture);
      let priceFurniture = Number(furniture.price);
      createTd(priceFurniture);
      let decFactorFurniture = Number(furniture.decFactor);
      createTd(decFactorFurniture);
      createInput();
      tbodyRef.appendChild(tagTr);
    });
    let checkBoxesRef = Array.from(document.getElementsByTagName("input"));
    checkBoxesRef.forEach(box => {
      box.removeAttribute('disabled');
      box.addEventListener("click", manipulateCheckBox);
    });
  }

  function OnClickBye() {
    let checkBoxesRef = Array.from(document.querySelectorAll("input[type=checkbox]"));
    let totalSum = 0;
    let averDecFactor = 0;
    let decFactorCounter = 0;
    let outputStr = "Bought furniture: ";
    checkBoxesRef.forEach(box => {
      if (box.checked === true) {
        let tdElements = Array.from(box.parentElement.parentElement.children);
        let furnitureName = tdElements[1].children[0].textContent;
        let furniturePrice = Number(tdElements[2].children[0].textContent);
        let decorFactor = Number(tdElements[3].children[0].textContent);
        outputStr += furnitureName + ", ";
        totalSum += furniturePrice;
        averDecFactor += decorFactor;
        decFactorCounter++;
      }
    });
    outputStr = outputStr.substring(0, outputStr.length - 2) + "\n";
    outputStr += "Total price: " + totalSum.toFixed(2) + "\n";
    outputStr += "Average decoration factor: " + (averDecFactor / decFactorCounter);
    outputTextRef.value = outputStr;
  }

  function createTd(furnitureElem) {
    let tagTd = document.createElement("td");
    let tagP = document.createElement("p");
    if (!imgFlag) {
      tagP.textContent = furnitureElem;
      tagTd.appendChild(tagP);
    }
    else {
      tagImg.setAttribute('src', furnitureElem);
      tagTd.appendChild(tagImg);
      imgFlag = false;
    }
    tagTr.appendChild(tagTd);
  }

  function createInput() {
    let tagTd = document.createElement("td");
    tagInput = document.createElement("input");
    tagInput.setAttribute('type', "");
    tagInput.type = "checkbox";
    tagInput.setAttribute('disabled', "");
    tagTd.appendChild(tagInput);
    tagTr.appendChild(tagTd);
  }

  function manipulateCheckBox(event) { return;
    // if (event.target.checked === false) event.target.removeAttribute('checked');
    // else event.target.setAttribute('checked', "");
  }
}

/*[    {
    "img":"https://images.furnituredealer.net/img/products/seven_seas_seating_by_bradington_young/color/ss185_ss185-03-089-b.jpg",
    "name": "Sofa",
    "price": "259",
    "decFactor":"0.4"
},
{
    "img":"https://www.stylespafurniture.com/wp-content/uploads/2020/03/Cove_3_Door_Wardrobe_1.jpg",
    "name": "Wardrobe",
    "price": "120",
    "decFactor":"1.2"
}]*/