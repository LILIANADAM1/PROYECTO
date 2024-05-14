// userController.js

const User = require('./userModel');

// Controlador para crear un nuevo usuario
exports.create = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para obtener todos los usuarios
exports.getAll = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para obtener un usuario por ID
exports.getById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para actualizar un usuario por ID
exports.updateById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para eliminar un usuario por ID
exports.deleteById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
