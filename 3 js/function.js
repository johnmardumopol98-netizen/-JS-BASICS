const priceTxt = document.getElementById("price");
const taxTxt = document.getElementById("tax");
const resultTxt = document.getElementById("result");

// Function to calculate total price with tax
function calculateTotal() {
    let price = Number(priceTxt.value);
    let taxRate = Number(taxTxt.value);

    if (price === 0 || taxRate === 0) {
        alert("Please enter price and tax rate");
        return;
    }

    let taxAmount = price * (taxRate / 100);
    let total = price + taxAmount;

    resultTxt.innerHTML = "Total Price with Tax: " + total.toFixed(2);
}
