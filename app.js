const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

// Slider navigation
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

// Cart functionality
const cartItems = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'), 10);

        cart.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} IDR`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPriceEl.textContent = total;
}

document.getElementById('checkout').addEventListener('click', () => {
    alert(`Total Harga: ${totalPriceEl.textContent} IDR`);
    cart = [];
    updateCart();
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
