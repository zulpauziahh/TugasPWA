document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    setInterval(nextSlide, 5000);

    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    let cart = [];

    // Add product to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseInt(button.getAttribute('data-price'), 10);

            // Check if the product is already in the cart
            const existingProduct = cart.find(item => item.name === name);
            if (existingProduct) {
                // If product exists, increase quantity
                existingProduct.quantity += 1;
            } else {
                // Otherwise, add new product
                cart.push({ name, price, quantity: 1 });
            }
            updateCart();
        });
    });

    // Update the cart UI and total price
    function updateCart() {
        cartItems.innerHTML = '';  // Clear current cart list
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.quantity} x ${item.price.toLocaleString('id-ID')} IDR`;
            
            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Hapus';
            removeButton.classList.add('remove-item');
            removeButton.addEventListener('click', () => removeFromCart(item.name));

            li.appendChild(removeButton);
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        totalPriceEl.textContent = total.toLocaleString('id-ID');
        cartCount.textContent = cart.length;
        document.getElementById('checkout').disabled = cart.length === 0;
    }

    // Remove product from cart
    function removeFromCart(productName) {
        cart = cart.filter(item => item.name !== productName);  // Remove the item from cart
        updateCart();  // Update cart UI after removal
    }

    // Checkout functionality
    document.getElementById('checkout').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Keranjang Anda kosong!');
        } else {
            alert(`Total Harga: ${totalPriceEl.textContent} IDR\nTerima kasih sudah berbelanja!`);
            cart = [];  // Clear the cart after checkout
            updateCart();  // Update cart UI
        }
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    }
});
