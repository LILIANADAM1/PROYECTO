// api-routes.js

const router = require('express').Router();
const userController = require('./userController');
const questionController = require('./questionController');

// Rutas para CRUD de usuarios
router.post('/usuarios', userController.create); // Crear un nuevo usuario
router.get('/usuarios', userController.getAll); // Obtener todos los usuarios
router.get('/usuarios/:id', userController.getById); // Obtener un usuario por ID
router.put('/usuarios/:id', userController.updateById); // Actualizar un usuario por ID
router.delete('/usuarios/:id', userController.deleteById); // Eliminar un usuario por ID

// Rutas para CRUD de preguntas y respuestas
router.post('/preguntas', questionController.createQuestion); // Crear una nueva pregunta
router.get('/preguntas', questionController.getAllQuestions); // Obtener todas las preguntas
router.get('/preguntas/:id', questionController.getQuestionById); // Obtener una pregunta por ID
router.put('/preguntas/:id', questionController.updateQuestionById); // Actualizar una pregunta por ID
router.delete('/preguntas/:id', questionController.deleteQuestionById); // Eliminar una pregunta por ID


module.exports = router;
