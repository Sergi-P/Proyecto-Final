import Registrar_comunidadService from './services/Registrar_comunidadService';
const Registrar_comunidadService = new Registrar_comunidadService();

import { format } from 'timeago.js';

class UI2 {

  async renderRegistrar_comunidad() {
    const Registrar_comunidad = await Registrar_comunidadService.getRegistrar_comunidad();
    const Registrar_comunidadCardContainer = document.getElementById('Registrar_comunidad-cards');
    Registrar_comunidadCardContainer.innerHTML = '';
    Registrar_comunidad.forEach((Registrar_comunidad) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${Registrar_comunidad.imagePath}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${Registrar_comunidad.nombre}</h4>
                    <p class="card-text">${Registrar_comunidad.contraseña}</p>
                    <a href="#" class="btn btn-danger delete" _id="${Registrar_comunidad._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(Registrar_comunidad.created_at)}
        </div>
      </div>
      `;
      Registrar_comunidadCardContainer.appendChild(div);
    });
  }

  async addANewRegistrar_comunidad(Registrar_comunidad) {
    await Registrar_comunidadService.postRegistrar_comunidad(Registrar_comunidad);
    this.renderRegistrar_comunidad();
    this.clearRegistrar_comunidadForm();
  }

  clearRegistrar_comunidadForm() {
    document.getElementById('Registrar_comunidad-form').reset();
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
    const Registrar_comunidadForm = document.querySelector('#Registrar_comunidad-form');
    container.insertBefore(div, Registrar_comunidadForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteRegistrar_comunidad(Registrar_comunidadId) {
    await Registrar_comunidadService.deleteRegistrar_comunidad(Registrar_comunidadId);
    this.renderRegistrar_comunidad();
  }

}

export default UI2;
