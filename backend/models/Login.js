const { Schema, model } = require('mongoose');

const LoginSchema = new Schema({
    correo: { type: String, required: true },
    contraseña: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Login', LoginSchema);
