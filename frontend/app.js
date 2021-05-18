import "./styles/app.css";
book
import Registrar from './models/Registrar.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderRegister();
});


document.getElementById('Registrar-form')
  .addEventListener('submit', function(e) {

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
    const ui = new UI();

    // New Book Object
    const registrar = new Registrar(nombre, correo, contraseña, confirmar_contraseña);

    // Validating User Input
    if (nombre === '' || contraseña === '' || confirmar_contraseña === ''|| correo === '') {
      ui.renderMessage('Rellena todos los recuadros', 'error', 3000);
    } 
    else {
      // Pass the new book to the UI
      ui.addANewRegistrar(formData);
      ui.renderMessage('Registrado correctamente', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('Registrar-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteRegistrar(e.target.getAttribute('_id'));
      ui.renderMessage('Registrar Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
