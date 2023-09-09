const inputNuevaTarea = document.querySelector("#nueva-tarea");
const buscarTarea = document.querySelector("#buscar-tarea");
const divTareaBuscada = document.querySelector("#tarea-buscada");
const CLAVE_TAREAS = "tarea";

let listaTareas = "lista vacia";
listaTareas = [];

function iniciarListaTareas() {
    listaTareas = JSON.parse(localStorage.getItem(CLAVE_TAREAS));
    if (listaTareas === null) {
        listaTareas = [];
        localStorage.setItem(CLAVE_TAREAS, JSON.stringify(listaTareas));
    }

    listaTareas.forEach(tarea => {
        document.querySelector("ol").innerHTML += `
            <li> ${tarea} </li>
        `; 
    });
}

function agregar() {
    let nuevaTarea = inputNuevaTarea.value;
    document.querySelector("ol").innerHTML += `
        <li> ${nuevaTarea} </li>
    `;

    
    listaTareas.push(nuevaTarea);

    localStorage.setItem(CLAVE_TAREAS,JSON.stringify(listaTareas) );
}

function buscar() {
    let found = false;

    for (let i = 0; i < listaTareas.length && !found; i++) {
        if (i + 1 === parseInt(buscarTarea.value)) {
            divTareaBuscada.innerHTML = `<span>Tarea buscada: ${listaTareas[i]}</span>`;
            found = true;
        }
    }

    if (!found) {
        divTareaBuscada.innerHTML = `<span>Tarea no encontrada</span>`;
    }
}


/* localStorage.clear() */
iniciarListaTareas();