const inputNuevaTarea = document.querySelector("#nueva-tarea");
const CLAVE_TAREAS = "tarea";

let listaTareas = "lista vacia";
listaTareas = [];

function iniciarListaTareas() {
    listaTareas = JSON.parse(localStorage.getItem(CLAVE_TAREAS));
    if (listaTareas === null) {
        listaTareas = [];
        localStorage.setItem(CLAVE_TAREAS, JSON.stringify(listaTareas));
    }

}

function agregar() {
    let nuevaTarea = inputNuevaTarea.value;
    document.querySelector("ol").innerHTML += `
        <li> ${nuevaTarea} </li>
    `;

    
    listaTareas.push(nuevaTarea);

    localStorage.setItem(CLAVE_TAREAS,JSON.stringify(listaTareas) );
}

iniciarListaTareas();