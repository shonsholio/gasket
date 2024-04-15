const controller = {}

const data = require('../playersA.json')
const dataGame = require('../dataGame.json')
const info = require('../api.json')

const fs = require('fs');



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

controller.q4 = (req,res) => {
  res.render('prueba')
}

controller.probar = (req,res) => {
  const users = JSON.parse(fs.readFileSync('api.json')).users
  res.render("prueba", {info: users})
}

controller.prueba = (req,res) => {

  const users = JSON.parse(fs.readFileSync('api.json')).users ;

  let user = {
      id:Date.now(),
      nombre: req.body.nombre,
      edad: req.body.edad
  }

  users.push(user)

  fs.writeFileSync('api.json', JSON.stringify({ users }))

}

module.exports = controller