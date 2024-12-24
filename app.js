document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

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
    navigator.serviceWorker.register('./service-worker.js')
        .then(() => console.log('Service Worker berhasil didaftarkan!'))
        .catch(err => console.error('Service Worker gagal didaftarkan:', err));
}
