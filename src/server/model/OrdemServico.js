var mongoose = require('mongoose')

var OrdemServicoSchema = new mongoose.Schema({
  ordemServicoTipo: String
})

module.exports = mongoose.model('OrdemServiço', OrdemServicoSchema)
