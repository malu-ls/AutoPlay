var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  user: String,
  email: String,
  passoword: String,
  isAdm: Boolean
})

module.exports = mongoose.model('User', UserSchema)
