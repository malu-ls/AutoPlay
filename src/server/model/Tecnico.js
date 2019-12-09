var mongoose = require('mongoose')

var TecnicoSchema = new mongoose.Schema({
  tecnicoNome: String,
  tecnicoCNH: Number,
  tecnicoCPF: Number,
  tecnicoPIS: Number,
  tecnicoExames: Boolean,
  tecnicoEndereco: String
})

module.exports = mongoose.model('Técnico', TecnicoSchema)
