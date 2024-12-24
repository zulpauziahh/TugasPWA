document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseInt(button.getAttribute('data-price'));

            // Tambah item ke keranjang
            const listItem = document.createElement('li');
            listItem.textContent = `${name} - ${price} IDR`;
            cartItems.appendChild(listItem);

            // Update total harga
            totalPrice += price;
            totalPriceElement.textContent = totalPrice;
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert(`Total belanja Anda: ${totalPrice} IDR. Terima kasih!`);
        // Reset keranjang
        cartItems.innerHTML = '';
        totalPrice = 0;
        totalPriceElement.textContent = totalPrice;
    });
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(() => console.log('Service Worker berhasil didaftarkan!'))
        .catch(err => console.error('Service Worker gagal didaftarkan:', err));
}
