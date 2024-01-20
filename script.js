function mostrarImagen() {
    // Obtener el valor del input
    var numero = document.getElementById('numeroInput').value;

    // Validar que el número esté entre 1 y 5
    if (numero >= 1 && numero <= 5) {
        // Construir la ruta de la imagen
        var rutaImagen = 'images/imagen' + numero + '.jpg';

        // Crear un elemento de imagen y asignar la ruta
        var imagen = document.createElement('img');
        imagen.src = rutaImagen;

        // Limpiar el contenedor de imagen antes de mostrar la nueva
        var imagenContainer = document.getElementById('imagenContainer');
        imagenContainer.innerHTML = '';

        // Añadir la imagen al contenedor
        imagenContainer.appendChild(imagen);
    } else {
        alert('Por favor, ingresa un número entre 1 y 5.');
    }
}
