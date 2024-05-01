async function cargarUsuarios() {
    try {
        const response = await fetch('usuarios.json');
        const data = await response.json();
        return data.usuarios;
    } catch (error) {
        //console.error('Error al cargar la lista de usuarios:', error);
        return null;
    }
}

async function validarUsuario() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const selectedRole = document.getElementById('role').value;
    const usuarios = await cargarUsuarios();

    if (usuarios) {
        const usuarioEncontrado = usuarios.find(u => 
            u.username === username && 
            u.password === password && 
            u.email === email && 
            u.role === selectedRole);

        if (usuarioEncontrado) {
            // Usuario encontrado y datos correctos, procedemos a redirigir según el rol
            if (usuarioEncontrado.role === 'administrador') {
                window.location.href = 'admin.html';
            } else if (usuarioEncontrado.role === 'cliente') {
                window.location.href = 'home.html';
            }
        } else {
            // Usuario no encontrado o datos incorrectos, mostrar error
            alert('Acceso no concedido, verifica los datos y el rol.');
            window.location.href = 'login.html';
        }
    } else {
        alert('Error al cargar los usuarios.');
    }
}
