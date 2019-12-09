var mongoose = require('mongoose')

var VeiculosSchema = mongoose.Schema({
  veiculoModelo: String,
  veiculoPlaca: String,
  veiculoChassi: String,
  veiculoAno: Number(4),
  veiculoCor: String
})

module.exports = mongoose.model('Veiculos', VeiculosSchema)
