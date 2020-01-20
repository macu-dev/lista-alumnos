const form = document.getElementById("formulario");
const alumnos = new Array();

var editando = null;

form.onsubmit = (e) =>{
  e.preventDefault();

  /*BUsca los valores del formulario */
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("last-name").value;
  let curso = document.getElementById("curso").value;
  let nota = document.getElementById("nota").value;

  let isValid = true;

  if( nombre === undefined || !Number.isNaN(Number(nombre))) {
    alert("Ingrese por favor correctamente el nombre");
    isValid = false;
  }
  if(apellido === undefined || !Number.isNaN(Number(apellido))) {
    alert("Ingrese correctamente el apellido");
    isValid = false;
  } 
  
  if(curso === undefined || !Number.isNaN(Number(curso))) {
    alert("Ingrese correctamente el curso");
    isValid = false;
  }
  
  if( nota.length === 0 ) {
    alert("ingrese un numero por favor");
    isValid = false;
  }
   
  if (isValid) {
      if (!editando) {
        alumnos.push({
          nombre,
          apellido,
          curso,
          nota
        });
      } else {
        alumnos[editando] = {
          nombre,
          apellido,
          curso,
          nota
        };
        editando = null;
      }
        
      //Dibujamos la tabla
      RenderTabla();
  }
}

function borrar(id) {
  alumnos.splice(id,1);
  RenderTabla();
}

function editar(id) {
  editando = id;
  let nombre = document.getElementById("name");
  let apellido = document.getElementById("last-name");
  let curso = document.getElementById("curso");
  let nota = document.getElementById("nota");
  let a = alumnos[id];
  nombre.value = a.nombre;
  apellido.value = a.apellido;
  curso.value = a.curso;
  nota.value = a.nota;
}

// Dibujar tabla
function RenderTabla() {
  let tabla_visible = document.getElementById("Alumnos");

  if (alumnos.length > 0) {
    let tabla_cuerpo = document.getElementById("tabla");
    tabla_cuerpo.innerHTML = alumnos.map(({nombre, apellido, curso, nota}, index) =>{
      return `
      <tr>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${curso}</td>
        <td>${nota}</td>
        <td>
          <button onclick="borrar('${index}')"> Borrar </button> <br/>
          <button onclick="editar('${index}')">Editar</button>
        </td>
      </tr>`;
    }).join("");
    tabla_visible.classList.remove("hidden");
  } else {
    tabla_visible.classList.add("hidden");
  }
}

