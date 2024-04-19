const controller = {}

const playersA = require('../models/playerAs')
const playersB = require('../models/playerBs')

const dataGame = require('../models/dataGame')

controller.main = (req,res) => {
  res.render('main')
}

controller.players = async (req,res) => {
  const idGame = req.query.idGame
  
  dataGame.find( {idGame: idGame})
  .then(docs => { 
    playersA.find( {idGame: idGame} )
    .then(playersA => {
    playersB.find( {idGame: idGame} )
    .then(playersB => {
      res.render('jugadores', {
        data: docs,
        playersA: playersA,
        playersB: playersB
      })
    })
  })})
}

controller.addPlayers = async (req,res) => {
  const body = req.body
  
  if (body.equipo == 'A') {

    try {
      const newPlayer = await playersA.create(body)

      res.redirect(`/players?idGame=${body.idGame}`)
      
      } 
      catch (e) {
        console.log(e)
      } 

  } else {

    try {
      const newPlayer = await playersB.create(body)

      res.redirect(`/players?idGame=${body.idGame}`)
      
      } 
      catch (e) {
        console.log(e)
      }     
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
  const datas = req.query.idGame.split('-')

  let direccion = datas[0]
  let parametro = datas[1]
  
  playersA.deleteOne({ documento: parametro})
    .then(result => {
      console.log(`Documento eliminado: ${result.deletedCount}`);
      res.redirect(`/players?idGame=${direccion}`)
  })
  .catch(err => console.error(err));
}

controller.q1 = (req,res) => {
  let idGame = req.query.idGame

  dataGame.find({ idGame: idGame })
  .then(infoGame => {
  playersA.find({ idGame: idGame })
  .then(playersA => {
    res.render('periodos', {
      infoGame: infoGame,
      playersA: playersA,
    })
  })  
  })
}


module.exports = controller