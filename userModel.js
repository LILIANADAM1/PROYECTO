// userModel.js

const mongoose = require('mongoose');

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
    usuario: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    contraseña: { type: String, required: true }
});

// Crear un modelo de usuario basado en el esquema definido
const User = mongoose.model('User', userSchema);

module.exports = User;
