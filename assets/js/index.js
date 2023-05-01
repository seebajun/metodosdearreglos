const btn = document.querySelector('#btn')
const nuevaTarea = document.querySelector('#cajaTexto')
const idTarea = document.querySelector('#idTarea')
const idTotal = document.querySelector('#idTotal')
const idRealizadas = document.querySelector('#idRealizadas')

const listaPorDefecto = [
    { id: 1, Tarea: 'Lavar la loza', isDone: false },
    { id: 2, Tarea: 'Regar el pasto', isDone: false },
    { id: 3, Tarea: 'pasear al Perro', isDone: false },
];

let id = 4

function dibujarLista() {
    let htmlTarea = '';
    const cargarLista = (tareas) => {
        for (let tarea of tareas) {
            htmlTarea += `<tr>
        <td>${tarea.id}</td>
        <td>${tarea.Tarea}</td>
        <td> <input type="checkbox" id="${tarea.id}" onchange="contarRealizadas()" ${tarea.isDone ? 'checked' : ''}> </td>
        <td> <input type="button" value="x" onclick="eliminarTarea(${tarea.id})"> </td>
        </tr>`;
        }
    };
    cargarLista(listaPorDefecto);
    idTarea.innerHTML = htmlTarea;
}

function validar() {
    var cajaTexto = document.getElementById("cajaTexto").value;
    if (cajaTexto == "") {
      alert("El campo no puede estar vacío");
    } else {
      alert("El campo contiene: " + cajaTexto);
    }
  }

btn.addEventListener('click', () => {
    const nuevoElemento = { id: id, Tarea: nuevaTarea.value, isDone: false };
    listaPorDefecto.push(nuevoElemento);
    id++;
    nuevaTarea.value = '';
    let htmlTarea = ''

    dibujarLista();
    contarTareas();
  
})

dibujarLista()

const eliminarTarea = (id) => {
    const index = listaPorDefecto.findIndex((nTarea) => nTarea.id === id);
    if (index > -1) {
        listaPorDefecto.splice(index, 1);
        dibujarLista();
        contarTareas();
        contarRealizadas();
    }
}

const contarRealizadas = () => {
    let realizadas = 0
    for (let tarea of listaPorDefecto) {
        if (document.getElementById(tarea.id).checked) {
            realizadas++
            tarea.isDone = true;
        } else {
            tarea.isDone = false;
        }
    }
    idRealizadas.innerHTML = realizadas
}

const contarTareas = () => {
    idTotal.innerHTML = listaPorDefecto.length;
}