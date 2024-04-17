const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    fecha: Date,
    campeonato: String,
    categoria: String,
    fase: String,
    equipoA: String,
    coachA: String,
    equipoB: String,
    coachB: String
  })

const dataGame = mongoose.model('dataGame', UserScheme)

module.exports = dataGame