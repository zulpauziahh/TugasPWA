document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Hero slider logic
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    const updateSlider = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slides[currentIndex].classList.add('active');
    };

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 2000); // Ganti gambar setiap 2 detik

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseInt(button.getAttribute('data-price'));

            const listItem = document.createElement('li');
            listItem.textContent = `${name} - ${price} IDR`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Hapus';
            removeButton.className = 'remove-item';
            removeButton.addEventListener('click', () => {
                totalPrice -= price;
                totalPriceElement.textContent = totalPrice;
                listItem.remove();
            });

            listItem.appendChild(removeButton);
            cartItems.appendChild(listItem);

            totalPrice += price;
            totalPriceElement.textContent = totalPrice;
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert(`Total belanja Anda: ${totalPrice} IDR. Terima kasih!`);
        cartItems.innerHTML = '';
        totalPrice = 0;
        totalPriceElement.textContent = totalPrice;
    });
});

// Service Worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('Service Worker terdaftar dengan sukses:', registration);
            })
            .catch(error => {
                console.error('Service Worker gagal didaftarkan:', error);
            });
    });
});
