// questionController.js

const Question = require('./questionModel');

// Controlador para crear una nueva pregunta
exports.createQuestion = async (req, res) => {
    try {
        const { pregunta, respuesta } = req.body;
        const newQuestion = await Question.create({ pregunta, respuesta });
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para obtener todas las preguntas
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para obtener una pregunta por ID
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para actualizar una pregunta por ID
exports.updateQuestionById = async (req, res) => {
    try {
        const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para eliminar una pregunta por ID
exports.deleteQuestionById = async (req, res) => {
    try {
        const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Pregunta no encontrada' });
        }
        res.status(200).json({ message: 'Pregunta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
