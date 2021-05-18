import RegistrarService from './services/RegistrarService';
const RegistrarService = new RegistrarService();

import { format } from 'timeago.js';

class UI {
/*
  async renderRegister() {
    const Registrar = await RegistrarService.getRegistrar();
    const RegistrarCardContainer = document.getElementById('Registrar-cards');
   RegistrarCardContainer.innerHTML = '';
    Registrar.forEach((Registrar) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${Registrar.imagePath}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${Registrar.nombre}</h4>
                    <p class="card-text">${Registrar.contraseña}</p>
                    <a href="#" class="btn btn-danger delete" _id="${Registrar._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(Registrar.created_at)}
        </div>
      </div>
      `;
      RegistrarCardContainer.appendChild(div);
    });
  }*/

  async addANewRegistrar(Registrar) {
    await RegistrarService.postRegistrar(Registrar);
    this.renderRegistrar();
    this.clearRegistrarForm();
  }

  clearRegistrarForm() {
    document.getElementById('Registrar-form').reset();
    document.getElementById('nombre').focus();
  }

  renderMessage(message, colorMessage, secondsToRemove) {
    // Creating a div
    const div = document.createElement('div');
    // Styling the div
    div.className = `message ${colorMessage}`;
    // Adding Text to the div
    div.appendChild(document.createTextNode(message));
    // Puting in the documnet
    const container = document.querySelector('.col-md-4');
    const RegistrarForm = document.querySelector('#Registrar-form');
    container.insertBefore(div, RegistrarForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }
/*
  async deleteRegistrar(RegistrarId) {
    await RegistrarService.deleteRegistrar(RegistrarId);
    this.renderRegistrar();
  }
*/
}

export default UI;
