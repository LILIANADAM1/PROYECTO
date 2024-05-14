// api-routes.js

const router = require('express').Router();
const userController = require('./userController');

// Rutas para CRUD de usuarios
router.post('/usuarios', userController.create); // Crear un nuevo usuario
router.get('/usuarios', userController.getAll); // Obtener todos los usuarios
router.get('/usuarios/:id', userController.getById); // Obtener un usuario por ID
router.put('/usuarios/:id', userController.updateById); // Actualizar un usuario por ID
router.delete('/usuarios/:id', userController.deleteById); // Eliminar un usuario por ID

module.exports = router;
