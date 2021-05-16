const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    nombre: { type: String, required: true },
    contraseña: { type: String, required: true },
    confirmar_contraseña: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Book', BookSchema);