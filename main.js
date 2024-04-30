document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento de envío predeterminado

    // Aquí podrías añadir validaciones adicionales o enviar datos a un servidor
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simplemente vamos a verificar que los campos no estén vacíos
    if (email && password) {
        window.location.href = 'home.html'; // Redireccionar a home si todo está correcto
    } else {
        alert('Por favor, rellene todos los campos.');
    }
}
);
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutSection = document.getElementById('about');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();  // Prevenir el comportamiento de salto del enlace
        // Alternar la visibilidad de la sección About Us
        if (aboutSection.style.display === "none") {
            aboutSection.style.display = "block";
        } else {
            aboutSection.style.display = "none";
        }
    });
});
// Verificar el estado de la sesión y mostrar/ocultar botones
document.addEventListener("DOMContentLoaded", function() {
    // Aquí se asume que tienes alguna forma de verificar si un usuario está conectado
    const userLoggedIn = checkUserSession(); // Implementa esta función según tu gestión de sesiones

    const logoutButton = document.getElementById('logoutButton');
    logoutButton.style.display = userLoggedIn ? 'block' : 'none';
});

// Función para cerrar sesión
function logout() {
    // Implementa aquí la limpieza de la sesión
    // Por ejemplo: eliminar cookies, localStorage o comunicarse con el servidor para cerrar la sesión

    // Redirigir al índice
    window.location.href = 'index.html';
}

// Función ficticia para verificar la sesión del usuario
function checkUserSession() {
    // Esta función debe ser implementada según cómo manejes las sesiones
    // Por ejemplo, podría verificar una cookie o un token almacenado en localStorage
    return !!localStorage.getItem('userLoggedIn'); // Ejemplo de comprobación básica
}




