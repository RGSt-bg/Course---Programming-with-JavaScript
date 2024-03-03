function solve(str, casE) {

  let inputStr = document.getElementById("text").value;
  let inputArr = inputStr.toLowerCase().trim().split(" ");
  let caseType = document.getElementById("naming-convention").value;
  let resultStr = "";

  switch (caseType) {

    case "Camel Case": {
      resultStr = inputArr[0];
      for (let i = 1; i < inputArr.length; i++) {
        resultStr += inputArr[i][0].toUpperCase();
        resultStr += inputArr[i].substring(1, inputArr[i].length+1);
      }
      break;
    }

    case "Pascal Case": {
      for (let i = 0; i < inputArr.length; i++) {
        resultStr += inputArr[i][0].toUpperCase();
        resultStr += inputArr[i].substring(1, inputArr[i].length+1);
      }
      break;
    }

    default:
      resultStr = "Error!";
      break;
  }

    document.getElementById("result").textContent = resultStr;
    resultStr = "";
  }