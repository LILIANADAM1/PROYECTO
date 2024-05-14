// Filename: index.js

// Importar módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

console.log('Running PhotoPlay web service index');

// Importar las rutas de la API desde api-routes.js
const apiRoutes = require('./api-routes');

// Crear una instancia de la aplicación Express
const app = express();

// Habilitar CORS
app.use(cors());

// Configurar middleware para manejar solicitudes POST con datos JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost/photoplayredundancia', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
    console.log('Base de datos conectada exitosamente');
});

const port = process.env.PORT || 8080;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rutas de la API
app.use('/api', apiRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});
