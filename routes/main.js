const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.main)
router.get('/game', mainController.game)

router.get('/jugadores', mainController.players)
router.get('/cuarto1', mainController.q1)
router.get('/cuarto4', mainController.q4)


router.post('/newPlayer', mainController.addPlayer)
router.post('/newGame', mainController.addGame)

router.get('/prueba', mainController.probar)
router.post('/prueba', mainController.prueba)





module.exports = router 