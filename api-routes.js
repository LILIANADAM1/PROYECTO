// Filename: api-routes.js

// Initialize express router
const router = require('express').Router();

// Import playerController and scoreController
const playerController = require('./playerController');
const scoreController = require('./scoreController'); // Import if needed

// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API Trabajando',
        message: 'Bienvenido al mejor WS del mundo'
    });
});

// Routes for player-related operations
router.route('/player')
    .get(playerController.index)
    .post(playerController.new);

router.route('/player/:player_name')
    .delete(playerController.delete)
    .put(playerController.update)
    .get(playerController.indexByName);

router.route('/login')
    .post(playerController.login);

// Routes for score-related operations
router.route('/score/top')
    .get(playerController.indexTop10); // Assuming this is meant to be playerController

router.route('/score')
    .get(scoreController.index) // Assuming this is defined in scoreController
    .post(scoreController.new);

router.route('/delete/:player_id')
    .delete(playerController.deletePlayer);

// Export the router to be used in other parts of the application
module.exports = router;
