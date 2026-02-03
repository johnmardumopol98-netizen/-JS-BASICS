const elementTxt = document.getElementById("elements");
const num1Txt = document.getElementById("num1");
const resultTxt = document.getElementById("sum");

let arr = [];
let sum = 0;

 for(let i=0; i<arr.length; i++ ) {
    sum += arr[i];
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
}

function concatenate() {
   
}






elementTxt.innerHTML = arr.join("<br>");
sumTxt.innerHTML = sum;
console.log(arr);