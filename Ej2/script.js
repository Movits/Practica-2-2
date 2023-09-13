const emailIngresado = document.querySelector("#usuario-email");
const contrasenaIngresada = document.querySelector("#usuario-contrasena");



function verificar() {
    let email = emailIngresado.value;
    let contrasena = contrasenaIngresada.value;

    listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]');

    let userFound = false;

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].email === email && listaUsuarios[i].contrasena === contrasena) {
            userFound = true;
            break;
        }
    }
    
    if(userFound) {
        alert("Bienvenido");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
