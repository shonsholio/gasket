const controller = {}

const playersA = require('../models/playerAs')

controller.main = (req,res) => {
  res.render('main')
}

controller.players = async (req,res) => {
  playersA.find({})
    .then(docs => {
      res.render('jugadores', {
        data: docs
      })
    }) 
}

controller.addPlayers = async (req,res) => {
  const body = req.body

  try {
    const newPlayer = await playersA.create(body)

    playersA.find({})
    .then(docs => {
      res.render('jugadores', {
        data: docs
      })
    }) 
    
  } 
    catch (e) {
    console.log(e)
  }

}

module.exports = controller