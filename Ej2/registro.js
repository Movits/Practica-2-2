function guardarInformacion() {
    const entradaEmail = document.getElementById("email");
    const inputContrasena = document.getElementById("password");
    const inputContrasenaConfirmacion = document.getElementById("passwordConfirm");
    const entradaNombre = document.getElementById("nombre");
    const entradaApellido1 = document.getElementById("apellido1");
    const entradaApellido2 = document.getElementById("apellido2");
    const entradaGenero = document.querySelector("input[name='gender']:checked").value;
    
    if (inputContrasena.value !== inputContrasenaConfirmacion.value) {
        alert('Las contraseñas no coinciden.');
        return false; // No continuar si las contraseñas no coinciden
    }

    const informacionUsuario = {
        email: entradaEmail.value,
        contrasena: inputContrasena.value,
        nombre: entradaNombre.value,
        apellido1: entradaApellido1.value,
        apellido2: entradaApellido2.value,
        genero: entradaGenero
    };

    // Obtiene la lista actual de usuarios
    const usuariosActuales = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');
    // Agrega el nuevo usuario
    usuariosActuales.push(informacionUsuario);
    // Guarda la lista de nuevo en localStorage
    localStorage.setItem('listaUsuarios', JSON.stringify(usuariosActuales));

    window.location.href = "index.html";
}
