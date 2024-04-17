const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.main)

router.get('/players', mainController.players)
router.post('/players', mainController.addPlayers)

router.get('/deletePlayer/:documento', mainController.deletePlayer)

router.get('/game', mainController.game)
router.post('/game', mainController.addGame)


module.exports = router