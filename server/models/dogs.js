const mongoose = require('mongoose');
const Schema = mongoose.Schema

const DogSchema = new Schema({
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
  description: {
    type: String,
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

const Dog = mongoose.model('Dog', DogSchema)

module.exports = Dog