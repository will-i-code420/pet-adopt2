const Dog = require('../models/dogs')

module.exports = {
  async addDog (req, res) {
    try {
      const newDog = await Dog.create(req.body)
      res.status(200).json({
        msg: `${req.body.name} has been added!`
      })
    } catch (e) {
      console.log(e)
      res.status().json({
        msg: 'An error occured, please try again'
      })
    }
  },
  async getAllDogs (req, res) {
    try {
      const dogs = await Dog.find()
      res.status(200).json({
        dogs: dogs
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured please try again'
      })
    }
  },
  async getSingleDog (req, res) {
    try {
      const dog = await Dog.findById(req.params.id)
      res.status(200).json({
        dog: dog
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured please try again'
      })
    }
  }
}
