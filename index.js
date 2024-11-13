// Función para cargar y desplegar los productos
async function loadProducts() {
    try {
        // Intenta obtener el archivo JSON (en este caso data.json)
        const response = await fetch('data.json');

        // Verifica si la respuesta es exitosa (status 200-299)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Convierte la respuesta JSON a un objeto
        const data = await response.json();

        // Selecciona el contenedor donde se agregarán los productos
        const container = document.getElementById('productos');
        container.innerHTML = ''; // Limpiar el contenedor antes de agregar los productos

        // Itera sobre cada producto y crea la estructura de la tarjeta
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-6', 'col-lg-4', 'd-flex', 'justify-content-center', 'mb-4');

            productCard.innerHTML = `
                <div class="card text-center shadow-sm">
                    <img src="${product.image}" class="card-img-top product-image" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Cost:</strong> $${product.cost}</p>
                    </div>
                </div>
            `;

            // Añadir la tarjeta al contenedor
            container.appendChild(productCard);
        });
    } catch (error) {
        // Manejo de errores
        console.error("Error al cargar el archivo JSON:", error);
        // Mostrar un mensaje de error en el contenedor si no se cargan los productos
        const container = document.getElementById('productos');
        container.innerHTML = `<p class="text-danger">No se pudo cargar los productos. Intenta más tarde.</p>`;
    }
}

// Llamada a la función para cargar los productos cuando el contenido se haya cargado
document.addEventListener("DOMContentLoaded", loadProducts);
