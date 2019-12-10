var mongoose = require('mongoose')

var EmpresaSchema = new mongoose.Schema({
  empresaRazaoSocial: String,
  empresaNomeFantasia: String,
  empresaCNPJ: Number,
  empresaPlano: String,
  empresaContato: Number,
  empresaEndereco: String
})

module.exports = mongoose.model('Empresas', EmpresaSchema)
