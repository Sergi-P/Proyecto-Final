import "./styles/app2.css";

import Book from './models/Book.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderBooks();
});


document.getElementById('book-form')
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
    const book = new Book(nombre, correo, contraseña, confirmar_contraseña);

    // Validating User Input
    if (nombre === '' || contraseña === '' || confirmar_contraseña === '') {
      ui.renderMessage('Rellena todos los recuadros', 'error', 3000);
    } 
    else {
      // Pass the new book to the UI
      ui.addANewBook(formData);
      ui.renderMessage('Registrado correctamente', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('books-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Book Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
