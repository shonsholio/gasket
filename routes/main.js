const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.main)
router.get('/game', mainController.game)

router.get('/jugadores', mainController.players)
router.get('/cuarto1', mainController.q1)

router.post('/newPlayer', mainController.addPlayer)
router.post('/newGame', mainController.addGame)




module.exports = router 