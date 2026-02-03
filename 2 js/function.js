const elementTxt = document.getElementById("elements");
const num1Txt = document.getElementById("num1");
const resultTxt = document.getElementById("sum");

let arr = [];

// Function to add value to array
function addElement() {
    let value = num1Txt.value;

    if (value === "") {
        alert("Please enter a value");
        return;
    }

    arr.push(value);
    displayElements();
    num1Txt.value = "";
}

// Function to display array elements
function displayElements() {
    elementTxt.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        elementTxt.innerHTML += arr[i] + "<br>";
    }
}

// Function to clear entries
function clearEntries() {
    arr = [];
    elementTxt.innerHTML = "";
    num1Txt.value = "";
    resultTxt.innerHTML = "";
}



elementTxt.innerHTML = arr.join("<br>");
sumTxt.innerHTML = sum;

console.log(arr);
