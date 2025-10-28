// Load cart items when page loads
window.addEventListener('load', function() {
    displayCartItems();
});

function loadCart() {
    try {
        const savedCart = sessionStorage.getItem('shoppingCart');
        if (savedCart) {
            return JSON.parse(savedCart);
        }
    } catch (e) {
        console.log('sessionStorage not available');
    }
    return [];
}

function saveCart(cart) {
    try {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    } catch (e) {
        console.log('sessionStorage not available');
    }
}

function displayCartItems() {
    const cartContainer = document.getElementById('cartContainer');
    const cart = loadCart();
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-message">Your cart is empty. Start shopping!</p>';
        return;
    }
    
    cartContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='images/laptop1.jpg'">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Added on: ${new Date(item.id).toLocaleString()}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
    
    // Add total count
    const totalDiv = document.createElement('div');
    totalDiv.className = 'cart-total';
    totalDiv.innerHTML = `<h2>Total Items: ${cart.length}</h2>`;
    cartContainer.appendChild(totalDiv);
}

function removeFromCart(index) {
    const cart = loadCart();
    cart.splice(index, 1);
    saveCart(cart);
    displayCartItems();
    alert('Item removed from cart!');
}

function checkout() {
    const cart = loadCart();
    if (!cart || cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert(`Proceeding to checkout with ${cart.length} items...`);
    // Clear cart after checkout
    // sessionStorage.removeItem('shoppingCart');
    // displayCartItems();
}
