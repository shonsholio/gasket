const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    id: Number,
    nro: Number,
    nombre: String,
    documento: Number,
    idGame: String
  })

const Player = mongoose.model('PlayerA', UserScheme)

module.exports = Player