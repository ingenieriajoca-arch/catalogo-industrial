// Función para filtrar productos por categoría mediante los botones
function filtrarCategoria(categoria) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Cambiar la clase activa entre los botones
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Mostrar u ocultar las tarjetas según la categoría seleccionada
    cards.forEach(card => {
        if (categoria === 'todos' || card.getAttribute('data-category') === categoria) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Función para el buscador en tiempo real por texto (nombre, marca o código)
function filtrarProductos() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const textoTarjeta = card.innerText.toLowerCase();
        if (textoTarjeta.includes(input)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
