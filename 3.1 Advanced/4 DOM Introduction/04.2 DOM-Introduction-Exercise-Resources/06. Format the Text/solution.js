function solve() {

  let inputText = document.getElementById("input").value;
  let outputStr = "";

  while (inputText.search(".") !== -1) {
    for (let i = 0; i < 3; i++) {
      let end = inputText.indexOf(".") + 1;
      outputStr += inputText.substring(0, end);
      inputText = inputText.substring(end, );
    }
    outputStr = outputStr.trim();
    let p = document.createElement("p");
    let text = document.createTextNode(outputStr);
    p.appendChild(text);
    document.getElementById("output").appendChild(p);
    outputStr = "";
  } 
}