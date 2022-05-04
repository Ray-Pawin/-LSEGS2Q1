async function getinput() {
  let inputText = document.getElementById("inputvariable").value;
  let selectorOption = document.getElementById("selector").value;
  if (isNumber( inputText) >= 0) {
    if (calculateOption(selectorOption, inputText) ) {
      document.getElementById("result").innerHTML = "true";
    } else {
      document.getElementById("result").innerHTML = "false";
    }
  } else {
    document.getElementById("inputvariable").value = "1";
  }
}

function isNumber( inputText) {
  if (/[a-zA-Z]/.test(inputText)) {
    return inputText.replace(/\D/g, "");
  } else if (inputText < 0) {
    return -1;
  } else {
    return Math.round(inputText);
  }
}

function calculateOption(selectorOption, inputText) {
  if (selectorOption == "prime") {
    
    for (let i = 2; i * i <= inputText; i++){
        if (inputText % i === 0) {
            return false;
        }
     
    }
    return true;
  }

  if (selectorOption == "fibo") {
    if (isSquare(5 * (inputText * inputText) - 4) || isSquare(5 * (inputText * inputText) + 4)) {
      // speciality of fibo
      return true;
    } else {
      return false;
    }
  }

  console.log("not")
}

var isSquare = function (n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};