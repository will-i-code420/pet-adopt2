const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'employee', 'user'],
    default: 'user',
    required: true
  },
  /* need to implement starred animals system
  animals: [{
    type: mongoose.Schema.Types.ObjectId, ref: ['Cats', 'Dogs']
  }]
  */
})

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) {
      return next(err)
    }
    this.password = passwordHash
    next()
  })
})

UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err)
    } else {
      if (!isMatch) {
        return cb(null, isMatch)
      }
      return cb(null, this)
    }
  })
}

const User = mongoose.model('User', UserSchema)

module.exports = User
