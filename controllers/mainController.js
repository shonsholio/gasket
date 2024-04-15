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

module.exports = controller