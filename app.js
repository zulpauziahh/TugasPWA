document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    // Hero slider logic
    const sliderImages = document.querySelectorAll('#hero-slider img');
    let currentIndex = 0;

    const updateSlider = () => {
        sliderImages.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
        currentIndex = (currentIndex + 1) % sliderImages.length;
    };

    setInterval(updateSlider, 3000); // Ganti gambar setiap 3 detik

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
