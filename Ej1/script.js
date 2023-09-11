const inputNuevaTarea = document.querySelector("#nueva-tarea");
const buscarTarea = document.querySelector("#buscar-tarea");
const divTareaBuscada = document.querySelector("#tarea-buscada");
const inputActualizarTareaTxt = document.querySelector("#actualizar-tarea-txt");
const inputActualizarTareaNum = document.querySelector("#actualizar-tarea-num");
const inputEliminarTarea = document.querySelector("#eliminar-tarea");

const CLAVE_TAREAS = "listaTareas";

let listaTareas = "lista vacia";
listaTareas = [];

function iniciarListaTareas() {
  listaTareas = JSON.parse(localStorage.getItem(CLAVE_TAREAS));
  if (listaTareas === null) {
    listaTareas = [];
    actualizarLocalStorage();
  }

  generarListaTareas();
}

function actualizarLocalStorage() {
    localStorage.setItem(CLAVE_TAREAS, JSON.stringify(listaTareas));
}

function generarListaTareas() {
    document.querySelector("ol").innerHTML = "";
    listaTareas.forEach((tarea) => {
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
  actualizarLocalStorage();
}

function buscar() {
    divTareaBuscada.innerHTML = `
        <span><strong>Tarea buscada:</strong> ${listaTareas[buscarTarea.value - 1]}</span>
    `;
}

function actualizar() {
  let posTarea = inputActualizarTareaNum.value;
  let txtNuevaTarea = inputActualizarTareaTxt.value;

  listaTareas[posTarea - 1] = txtNuevaTarea;

  generarListaTareas();
  actualizarLocalStorage();
}

function eliminar() {
    let posEliminarTarea = inputEliminarTarea.value - 1;

    listaTareas.splice(posEliminarTarea, 1);

    generarListaTareas();
    actualizarLocalStorage();
}

function eliminarLista() {
    localStorage.clear();
    iniciarListaTareas();
    divTareaBuscada.innerHTML = `
        <span><strong>Tarea buscada:</strong></span>`;
}

iniciarListaTareas();