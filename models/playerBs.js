const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    id: Number,
    nro: Number,
    nombre: String,
    documento: Number,
    idGame: String,
    equipo: String
  })

const Player = mongoose.model('PlayerB', UserScheme)

module.exports = Player