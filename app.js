
let form = document.getElementById("formulario");

form.onsubmit = (e) =>{
  e.preventDefault();

  /*BUsca los valores del formulario */
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("last-name").value;
  let curso = document.getElementById("curso").value;
  let nota = document.getElementById("nota").value;
  let tabla_visible = document.getElementsByClassName("hidden")[0];

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
  
    if(tabla_visible && tabla_visible.className == "hidden"){
      tabla_visible.classList.remove ("hidden");
    }
      
      let tabla_cuerpo = document.getElementById("tabla");
      
      tabla_cuerpo.innerHTML += `
      <tr>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${curso}</td>
        <td>${nota}</td>
      </tr>`;
  }
}



