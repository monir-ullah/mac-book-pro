// Common Element(Code) 
const totalPrice = document.getElementById('total-price');

// All Funcion Start 
    // Best Price Detection and Set the Value
function bestPriceCostNumber() {
    const bestPriceCost = document.getElementById('best-price-$');
    const bestPriceCostNumber = parseInt(bestPriceCost.innerText);
    return bestPriceCostNumber;
}
    // Memory Cost Detection and Set the Value
function memoryCostNumber() {
    const memoryCost = document.getElementById('extra-memory-cost');
    const memoryCostNumber = parseInt(memoryCost.innerText);
    return memoryCostNumber;
}
    // Storage Cost Detection and Set the Value
function storageCostNumber() {
    const storageCost = document.getElementById('extra-storage-cost');
    const storageCostNumber = parseInt(storageCost.innerText);
    return storageCostNumber;
}
    // Delivery Cost Detection and Set the Value
function deliveryCostNumber() {
    const deliveryCost = document.getElementById('extra-delivery-cost');
    const deliveryCostNumber = parseInt(deliveryCost.innerText);
    return deliveryCostNumber;
}
    // Total Price Detection and Set the Value
function totalPriceNumber() {
    const totalPriceNumber = parseInt(totalPrice.innerText);
    return totalPriceNumber;
}
    // This Function Will Detect White Total amount and push the Result
function finalDicTotalFunction() {
    const finalDicTotal = document.getElementById('final-dic-total');
    finalDicTotal.innerText =totalOfAllFunction();
}
    // This Function Will Calcualte all Functions's Sum
function totalOfAllFunction(){
    const sumOfAllTotalFuncion = bestPriceCostNumber() + memoryCostNumber() + storageCostNumber() + deliveryCostNumber();
    return sumOfAllTotalFuncion;
}
// All Function End


// All Buttons (Add Event Listener) Start   
    // Memory Button   (2 Buttons Here In Memory Button Section)

        // 8 GB Memory Button Start
document.getElementById('memory-8gb').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = '0';
    totalPrice.innerText = totalOfAllFunction();
    finalDicTotalFunction();
});
        // 16 GB Memory Button Start
document.getElementById('memory-16gb').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    extraMemoryCost.innerText = '180';
    totalPrice.innerText = totalOfAllFunction();
    finalDicTotalFunction();

});
    // Storage  Button   (3 Buttons Here In Storage Button Section)
        // 256 GB Storage Button Start
document.getElementById('storage-256gb-ssd').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-storage-cost');
    extraMemoryCost.innerText = '0';  
    totalPrice.innerText = totalOfAllFunction();
    finalDicTotalFunction();
});
        // 512 GB Storage Button Start
document.getElementById('storage-512gb-ssd').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-storage-cost');
    extraMemoryCost.innerText = '100';
    totalPrice.innerText = totalOfAllFunction();
    finalDicTotalFunction();
})
        // 1 TB Storage Button Start
document.getElementById('storage-1tb-ssd').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-storage-cost');
    extraMemoryCost.innerText = '180';
    totalPrice.innerText = totalOfAllFunction();
    finalDicTotalFunction();
})
    // Delivery Buttons (2 Buttons Here In Delivery Section) 
        // Free Delivery Button
document.getElementById('delivery-cost-free').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-delivery-cost');
    extraMemoryCost.innerText = '0';
    totalPrice.innerText = totalOfAllFunction();
    finalDicTotalFunction();
})
        //  Delivery Cost $20 Button
document.getElementById('delivery-cost-$20').addEventListener('click', function () {
    const extraMemoryCost = document.getElementById('extra-delivery-cost');
    extraMemoryCost.innerText = '20';
    totalPrice.innerText = totalOfAllFunction();
    finalDicTotalFunction();
})
    // Apply Button and Intarection With Input with the Buttons
        // This Section Only For Apply Button and Input Detection
document.getElementById('apply-button').addEventListener('click', function () {
    const inputCode = document.getElementById('add-pomo-code-input');
    const finalDicTotal = document.getElementById('final-dic-total');
    if (inputCode.value == 'stevekaku') {
        // Pomo Code Validation
        const dicPriceValue = document.getElementById('total-price');
        const finalDicTotalDic = parseInt(dicPriceValue.innerText) * 0.2;
        finalDicTotal.innerText = parseInt(dicPriceValue.innerText) - finalDicTotalDic;
    }
    else{
        // Apply Button Validation
        alert("❌ Pomo Code Didn't Match, Please try this 'stevekaku' ")
    }
})
// All Buttons (Add Event Listener) Start