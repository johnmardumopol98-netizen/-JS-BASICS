const inputTxt = document.getElementById("itemInput");
const listTxt = document.getElementById("itemList");

let arr = [];

// Function called by the button
function addItem() {
    let value = inputTxt.value;

    if (value === "") {
        alert("Please enter an item");
        return;
    }

    arr.push(value);
    displayItems();
    inputTxt.value = "";
}

// Display array items
function displayItems() {
    listTxt.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        listTxt.appendChild(li);
    }
}