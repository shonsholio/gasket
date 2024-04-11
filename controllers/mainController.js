const controller = {}
const fs = require('fs');
const data = require('../playersA.json')


controller.main = (req,res) => {
  res.render('main')
}

controller.players = (req,res) => {
  res.render('jugadores', {
    data: data
  })
}

controller.addPlayer = (req,res) => {

  data.push(req.body)

  fs.writeFile('playersA.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error('Error al guardar el archivo:', err);
      res.status(500).send('Error al guardar el archivo');
    } else {
      console.log('Datos guardados en playersA.json');
      res.send('Datos guardados');
    }});
    
}

controller.q1 = (req,res) => {
  res.render('periodos')
}

module.exports = controller