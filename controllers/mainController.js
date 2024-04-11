const controller = {}
const fs = require('fs');
const data = require('../playersA.json')
const dataGame = require('../dataGame.json')


controller.main = (req,res) => {
  res.render('main')
}

controller.game = (req,res) => {
  res.render('game', {
    data: data
  })
}

controller.players = (req,res) => {
  res.render('jugadores', {
    data: data,
    dataGame: dataGame
  })
}

controller.addPlayer = (req,res) => {

  console.log(data)
  data.push(req.body)
  console.log(data)
  
  fs.writeFile('playersA.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error('Error al guardar el archivo:', err);
      res.status(500).send('Error al guardar el archivo');
    } else {
      console.log('Datos guardados en playersA.json');
    }

  });
      
}

controller.addGame = (req,res) => {

  dataGame.push(req.body)
  console.log(dataGame)

  fs.writeFile('dataGame.json', JSON.stringify(dataGame), (err) => {
    if (err) {
      console.error('Error al guardar el archivo:', err);
      res.status(500).send('Error al guardar el archivo');
    } else {
      console.log('Datos guardados en dataGame.json');

    }
  });
      
}

controller.q1 = (req,res) => {
  res.render('periodos')
}

module.exports = controller