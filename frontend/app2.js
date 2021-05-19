import "./styles/app2.css";

import Registrar_comunidad from './models/Registrar_comunidad';
import UI2 from './UI2.js';
/*
document.addEventListener('DOMContentLoaded', () => {
  const ui2 = new UI2();
  ui2.renderRegistrar_comunidad();
});
*/

document.getElementById('Registrar_comunidad-form').addEventListener('submit', function(e) {

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const confirmar_contraseña = document.getElementById('confirmar_contraseña').value;
    

    const formData = new FormData();
   
    formData.append('nombre', nombre);
    formData.append('correo', correo);
    formData.append('contraseña', contraseña);
    formData.append('confirmar_contraseña', confirmar_contraseña);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui2 = new UI2();

    // New Book Object
    //const registrar_comunidad = new Registrar_comunidad(nombre, correo, contraseña, confirmar_contraseña);

    // Validating User Input
    if (nombre === '' || contraseña === '' || confirmar_contraseña === ''|| correo === '') {
      ui2.renderMessage('Rellena todos los recuadros', 'error', 3000);
    } 
    else {
      // Pass the new book to the UI
      ui2.addANewRegistrar_comunidad(formData);
      ui2.renderMessage('Registrado correctamente', 'success', 2000);
    }

    e.preventDefault();
  });
/*
document.getElementById('Registrar_comunidad-cards')
  .addEventListener('click', e => {
    const ui2 = new UI2();
    if (e.target.classList.contains('delete')) {
      ui2.deleteRegistrar_comunidad(e.target.getAttribute('_id'));
      ui2.renderMessage('Registrar_comunidad Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });*/
