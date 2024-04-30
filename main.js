document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento de envío predeterminado

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        window.location.replace('home.html');
    } else {
        alert('Por favor, rellene todos los campos.');
    }
});

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
function checkUserLoggedIn() {
    // Supongamos que 'userLoggedIn' es una variable que indica si el usuario está autenticado
    if (userLoggedIn) {
        document.getElementById('logoutButton').style.display = 'block';
    } else {
        document.getElementById('logoutButton').style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkUserLoggedIn();
});
function borrarFila(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editarUsuario(btn) {
    var row = btn.parentNode.parentNode;
    var cells = row.children;
    for (let i = 0; i < cells.length - 1; i++) { // Evitar la última celda que contiene los botones
        let text = cells[i].textContent;
        cells[i].innerHTML = `<input type="text" value="${text}">`;
    }
    btn.textContent = "Guardar";
    btn.onclick = function() { guardarCambios(this); };
}

function guardarCambios(btn) {
    var row = btn.parentNode.parentNode;
    var inputs = row.querySelectorAll("input");
    inputs.forEach((input, index) => {
        row.children[index].textContent = input.value;
    });
    btn.textContent = "Editar";
    btn.onclick = function() { editarUsuario(this); };
}




