const mongoose = require('mongoose');

// Definir el esquema de la pregunta y respuestas
const questionSchema = new mongoose.Schema({
    pregunta: { type: String, required: true },
    respuestas: [
        { type: String, required: true },
        { type: String, required: false },
        { type: String, required: false }
    ]
});

// Crear un modelo de pregunta basado en el esquema definido
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
