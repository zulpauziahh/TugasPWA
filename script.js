document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');
    const cartItemsList = document.getElementById('cart-items');

    let cart = [];
    let totalPrice = 0;

    // Function to update the cart display
    function updateCart() {
        // Update the cart icon count
        cartCount.textContent = cart.length;

        // Update the total price
        totalPriceElement.textContent = totalPrice.toLocaleString();

        // Update cart items in the list
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price.toLocaleString()} IDR`;
            cartItemsList.appendChild(li);
        });

        // Enable/Disable checkout button
        if (cart.length > 0) {
            checkoutButton.disabled = false;
        } else {
            checkoutButton.disabled = true;
        }
    }

    // Function to add item to the cart
    function addToCart(name, price) {
        cart.push({ name, price });
        totalPrice += price;
        updateCart();
    }

    // Add event listeners to "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = button.getAttribute('data-name');
            const productPrice = parseInt(button.getAttribute('data-price'), 10);
            addToCart(productName, productPrice);
        });
    });

    // Handle checkout (Just a simple alert for now)
    checkoutButton.addEventListener('click', function () {
        alert('Terima kasih telah berbelanja! Total Belanja: ' + totalPrice.toLocaleString() + ' IDR');
        cart = [];
        totalPrice = 0;
        updateCart();
    });

    // Update cart display initially (in case there's already something in the cart)
    updateCart();

    // Service Worker registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')  // Daftar Service Worker
            .then(registration => {
                console.log('Service Worker terdaftar dengan scope:', registration.scope);
            })
            .catch(error => {
                console.error('Pendaftaran Service Worker gagal:', error);
            });
    }
});
