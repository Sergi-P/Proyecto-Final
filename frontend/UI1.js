import LoginService from './services/LoginService';
const LoginService = new LoginService();

import { format } from 'timeago.js';

class UI1 {
/*
  async renderLogin() {
    const Login = await LoginService.getLogin();
    const LoginCardContainer = document.getElementById('Login-cards');
    LoginCardContainer.innerHTML = '';
    Login.forEach((Login) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${Login.imagePath}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${Login.nombre}</h4>
                    <p class="card-text">${Login.contraseña}</p>
                    <a href="#" class="btn btn-danger delete" _id="${Login._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(Login.created_at)}
        </div>
      </div>
      `;
      LoginCardContainer.appendChild(div);
    });
  }*/

  async addANewLogin(Login) {
    await LoginService.postLogin(Login);
    this.renderLogin();
    this.clearLoginForm();
  }

  clearLoginForm() {
    document.getElementById('Login-form').reset();
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
    const LoginForm = document.querySelector('#Login-form');
    container.insertBefore(div, LoginForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }
/*
  async deleteLogin(LoginId) {
    await LoginService.deleteLogin(LoginId);
    this.renderLogin();
  }
*/
}

export default UI1;
