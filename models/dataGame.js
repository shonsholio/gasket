const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    fecha: Date,
    torneo: String,
    categoria: String,
    fase: String,
    equipoA: String,
    coachA: String,
    equipoB: String,
    coachB: String,
    idGame: String
  })

const dataGame = mongoose.model('dataGame', UserScheme)

module.exports = dataGame