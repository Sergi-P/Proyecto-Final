import "./styles/app1.css";

import Login from './models/Login.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderlogin();
});


document.getElementById('login-form')
  .addEventListener('submit', function(e) {

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    
   

    const formData = new FormData();
   
    formData.append('nombre', nombre);
    formData.append('correo', correo);
    formData.append('contraseña', contraseña);
   

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const login = new Login(nombre, correo, contraseña);

    // Validating User Input
    if (nombre === '' || contraseña === '' || correo === '') {
      ui.renderMessage('Rellena todos los recuadros', 'error', 3000);
    } 
    else {
      // Pass the new book to the UI
      ui.addANewlogin(formData);
      ui.renderMessage('Logeado correctamente', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('login-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deletelogin(e.target.getAttribute('_id'));
      ui.renderMessage('Cuenta Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
