// questionModel.js

const mongoose = require('mongoose');

// Definir el esquema de la pregunta y respuesta
const questionSchema = new mongoose.Schema({
    pregunta: { type: String, required: true },
    respuesta: { type: String, required: true }
});

// Crear un modelo de pregunta basado en el esquema definido
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
