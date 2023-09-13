function guardarInformacion() {
    const entradaEmail = document.getElementById("email");
    const entradaContrasena = document.getElementById("password");
    const entradaContrasenaConfirmacion = document.getElementById("passwordConfirm");
    const entradaNombre = document.getElementById("nombre");
    const entradaApellido1 = document.getElementById("apellido1");
    const entradaApellido2 = document.getElementById("apellido2");
    const entradaGenero = document.querySelector("input[name='gender']:checked").value;
    
    if (entradaContrasena.value !== entradaContrasenaConfirmacion.value) {
        alert('Las contraseñas no coinciden.');
        return false; // No continuar si las contraseñas no coinciden
    }

    const informacionUsuario = {
        email: entradaEmail.value,
        contrasena: entradaContrasena.value,
        nombre: entradaNombre.value,
        apellido1: entradaApellido1.value,
        apellido2: entradaApellido2.value,
        genero: entradaGenero
    };

    const usuariosActuales = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');
    let usuarioYaExiste = false;

    for (let i = 0; i < usuariosActuales.length; i++) {
        if (usuariosActuales[i].email === informacionUsuario.email) {
            usuarioYaExiste = true;
            break;
        }
    }

    if (!usuarioYaExiste) {
        // Agrega el nuevo usuario
        usuariosActuales.push(informacionUsuario);
        // Guarda la lista de nuevo en localStorage
        localStorage.setItem('listaUsuarios', JSON.stringify(usuariosActuales));
    } else {
        alert('El usuario ya existe.');
    
    }
    
    window.location.href = "index.html";
}