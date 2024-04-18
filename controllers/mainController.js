const controller = {}

const playersA = require('../models/playerAs')
const dataGame = require('../models/dataGame')
const { MongoCryptInvalidArgumentError } = require('mongodb')

controller.main = (req,res) => {
  res.render('main')
}

controller.players = async (req,res) => {
  const idGame = req.query.idGame
  
  dataGame.find( {idGame: idGame})
  .then(docs => { 
    playersA.find( {idGame: idGame} )
    .then(players => {
      res.render('jugadores', {
        data: docs,
        players: players
      })
    })
  })
}

controller.addPlayers = async (req,res) => {
  const body = req.body

  try {
    const newPlayer = await playersA.create(body)

    res.redirect(`/players?idGame=${body.idGame}`)
    
    } 
    catch (e) {
      console.log(e)
    } 
    
}

controller.game = async (req,res) => {
  res.render('game')
}

controller.addGame = async (req,res) => {
  const body = req.body
  const fecha = (req.body.fecha).split("-").join('')
  let cadena = (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000).toString();

  let idCompleto = fecha + cadena

  body.idGame = idCompleto
  console.log(body)

  try {
    const newGame = await dataGame.create(body)
    
    res.redirect('/all_Games')
  } 
    catch (e) {
    console.log(e)
  }
}

controller.allGames = async (req,res,next) => {
  dataGame.find( {} )
    .then(games => {
      res.render('allGames', {
        data: games
      })
    })
}

controller.selectGame = (req,res) => {
  res.send('GAME SELECTED')
}

controller.deletePlayer = async (req,res) => {
  const direccion = req.body
  console.log(direccion)

  let parametro = req.params.documento
  
  playersA.deleteOne({ documento: parametro})
    .then(result => {
      console.log(`Documento eliminado: ${result.deletedCount}`);
      res.redirect('/players')
  })
  .catch(err => console.error(err));

}


module.exports = controller