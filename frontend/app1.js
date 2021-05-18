import "./styles/app1.css";

import Login from './models/Login.js';
import UI1 from './UI1.js';
/*
document.addEventListener('DOMContentLoaded', () => {
  const ui1 = new UI1();
  ui1.renderlogin();
});
*/

document.getElementById('Login-form').addEventListener('submit', function(e) {

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
    const ui1 = new UI1();

    // New Book Object
    const login = new Login(nombre, correo, contraseña);

    // Validating User Input
    if (nombre === '' || contraseña === '' || correo === '') {
      ui1.renderMessage('Rellena todos los recuadros', 'error', 3000);
    } 
    else {
      // Pass the new book to the UI
      ui1.addANewlogin(formData);
      ui1.renderMessage('Logeado correctamente', 'success', 2000);
    }

    e.preventDefault();
  });
/*
document.getElementById('login-cards')
  .addEventListener('click', e => {
    const ui1 = new UI1();
    if (e.target.classList.contains('delete')) {
      ui1.deletelogin(e.target.getAttribute('_id'));
      ui1.renderMessage('Cuenta Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });*/
