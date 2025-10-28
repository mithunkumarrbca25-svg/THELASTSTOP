// Initialize cart from sessionStorage or create empty array
let cart = [];

// Load cart when page loads
window.addEventListener('load', function() {
    loadCart();
});

function loadCart() {
    try {
        const savedCart = sessionStorage.getItem('shoppingCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (e) {
        console.log('sessionStorage not available, using in-memory cart');
        cart = [];
    }
}

function saveCart() {
    try {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    } catch (e) {
        console.log('sessionStorage not available');
    }
}

function addToCart(productName, imagePath) {
    const product = {
        name: productName,
        image: imagePath,
        id: Date.now()
    };
    
    cart.push(product);
    saveCart(); // Save to sessionStorage
    alert('Added to cart: ' + productName);
}

function buyNow(productName) {
    alert('Proceeding to checkout for: ' + productName);
    // Here you would redirect to checkout page
}