const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CatSchema = new Schema({
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
  notes: [String]
})

const Cat = mongoose.model('Cat', CatSchema)

module.exports = Cat
