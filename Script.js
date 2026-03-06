let cart = JSON.parse(localStorage.getItem('cottonAuraCart')) || [];

function updateCartUI() {
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.innerText = cart.length;
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI(); // This is what changes the "0" to "1" on your screen
    localStorage.setItem('cottonAuraCart', JSON.stringify(cart));
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello Cotton Aura! I'd like to order:%0A%0A";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.price}%0A`;
        total += parseInt(item.price.replace(/[^0-9]/g, ''));
    });

    message += `%0A*Total: Rs. ${total}*%0A%0APlease confirm my order.`;
    window.open(`https://wa.me/9768841636?text=${message}`, '_blank');
}

function clearCart() {
    cart = [];
    localStorage.removeItem('cottonAuraCart');
    updateCartUI();
}

// Ensure counter updates when page loads
document.addEventListener('DOMContentLoaded', updateCartUI);
