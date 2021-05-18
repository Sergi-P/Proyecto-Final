const { Schema, model } = require('mongoose');

const RegistrarSchema = new Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    contraseña: { type: String, required: true },
    confirmar_contraseña: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Registrar', RegistrarSchema);