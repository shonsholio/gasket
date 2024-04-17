const controller = {}

const playersA = require('../models/playerAs')
const dataGame = require('../models/dataGame')

controller.main = (req,res) => {
  res.render('main')
}

controller.players = async (req,res) => {
  
  playersA.find({})
  .then(docs => {
    dataGame.find({})
      .then(game => {
        res.render('jugadores', {
          data: docs,
          info: game
        })
      })
    })
  
}

controller.addPlayers = async (req,res) => {
  const body = req.body

  try {
    const newPlayer = await playersA.create(body)

    playersA.find({})
    .then(docs => {
      dataGame.find({})
        .then(game => {
          res.render('jugadores', {
            data: docs,
            info: game
          })
        })
      })
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

  try {
    const newGame = await dataGame.create(body)
  
    res.redirect('/players')
    
  } 
    catch (e) {
    console.log(e)
  }
}

controller.deletePlayer = async (req,res) => {
  let parametro = req.params.documento
  
  playersA.deleteOne({ documento: parametro})
    .then(result => {
      console.log(`Documento eliminado: ${result.deletedCount}`);
  })
  .catch(err => console.error(err));

  res.redirect('/players')

}


module.exports = controller