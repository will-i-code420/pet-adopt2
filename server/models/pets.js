const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  species: {
    type: String,
    enum: ['cats', 'dogs'],
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  adopted: {
    type: Boolean,
    default: false
  },
  notes: [String]
})

const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet
