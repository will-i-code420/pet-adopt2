const mongoose = require('mongoose');
const Schema = mongoose.Schema

const today = new Date()

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  responded: {
    type: Boolean,
    default: false
  },
  followUpRequired: {
    type: Boolean,
    default: true
  },
  followUpDate: {
    type: Date,
    default: today.setDate(today.getDate() + 1)
  },
  petId: {
    type: String,
    default: 'none'
  }
})

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
