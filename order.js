document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Price list for each item
    const prices = {
        chickenFriedRice: 120,
        vegFriedRice: 90,
        gobiFriedRice: 80,
        chickenBiryani: 120,
        vegBiryani: 120,
        eggBiryani: 70,
        vanillaIceCream: 120,
        butterscotchIceCream: 140,
        blackCurrantIceCream: 100
    };

    // Retrieve quantities entered by the user
    const quantities = {
        chickenFriedRice: document.getElementById('chickenFriedRice').value || 0,
        vegFriedRice: document.getElementById('vegFriedRice').value || 0,
        gobiFriedRice: document.getElementById('gobiFriedRice').value || 0,
        chickenBiryani: document.getElementById('chickenBiryani').value || 0,
        vegBiryani: document.getElementById('vegBiryani').value || 0,
        eggBiryani: document.getElementById('eggBiryani').value || 0,
        vanillaIceCream: document.getElementById('vanillaIceCream').value || 0,
        butterscotchIceCream: document.getElementById('butterscotchIceCream').value || 0,
        blackCurrantIceCream: document.getElementById('blackCurrantIceCream').value || 0
    };

    // Calculate total price
    let totalPrice = 0;
    let orderSummary = '';

    for (let item in quantities) {
        const quantity = parseInt(quantities[item]);
        if (quantity > 0) {
            const cost = quantity * prices[item];
            totalPrice += cost;
            orderSummary += `${item.replace(/([A-Z])/g, ' $1').trim()} - ${quantity} x ₹${prices[item]} = ₹${cost}\n`;
        }
    }

    if (totalPrice > 0) {
        alert(`Your Order Summary:\n${orderSummary}\nTotal Price: ₹${totalPrice}`);
    } else {
        alert('Please select at least one item to order.');
    }
});
