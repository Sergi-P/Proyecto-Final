const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    contraseña: { type: password, required: true },
    confirmar_contraseña: { type: password, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Book', BookSchema);