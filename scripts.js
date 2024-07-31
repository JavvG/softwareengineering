document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close-btn');
    const detailsBtns = document.querySelectorAll('.details-btn');

    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Obtén la información del producto desde el contenedor
            const productCard = this.closest('.product-card');
            const productName = productCard.getAttribute('data-name');
            const productPrice = productCard.getAttribute('data-price');
            const productDescription = productCard.getAttribute('data-description');

            // Verifica que los valores se obtienen correctamente
            console.log('Product Name:', productName);
            console.log('Product Price:', productPrice);
            console.log('Product Description:', productDescription);

            // Actualiza el contenido del modal
            document.getElementById('modal-product-name').textContent = productName;
            document.getElementById('modal-product-price').textContent = productPrice;
            document.getElementById('modal-product-description').textContent = productDescription;

            // Muestra el modal
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


// JavaScript para ocultar los iconos al hacer scroll
window.onscroll = function() {
    let header = document.querySelector('header');
    let storeName = document.querySelector('.store-name');
    let loginButton = document.querySelector('.left-icons a');

    if (window.pageYOffset > 50) { // Ajusta el valor según la altura desde donde quieras ocultar
        storeName.style.display = 'none';
        loginButton.style.display = 'none';
    } else {
        storeName.style.display = 'flex';
        loginButton.style.display = 'inline-flex';
    }
};


document.getElementById('increment-btn').addEventListener('click', function() {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
});

document.getElementById('decrement-btn').addEventListener('click', function() {
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});
