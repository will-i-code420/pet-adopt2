const Pet = require('../models/pets')

module.exports = {
  async addPet (req, res) {
    try {
      const newPet = await Pet.create(req.body)
      await newPet.save()
      res.status(201).json({
        msg: `${req.body.name} has been added!`
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured, please try again'
      })
    }
  },
  async getAllPets (req, res) {
    try {
      const pets = await Pet.find()
      res.status(200).json({
        pets: pets
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured please try again'
      })
    }
  },
  /* no need for this method, may delete along with route
  
  async getSinglePet (req, res) {
    try {
      const pet = await Pet.findById(req.params.id)
      res.status(200).json({
        pet: pet
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured please try again'
      })
    }
  }, */
  async updateSinglePet (req, res) {
    try {
      const pet = Pet.findByIdAndUpdate(req.params.id, req.body)
      res.status(202).json({
        pet: pet,
        msg: `Updated ${req.body.name} information`
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured please try again'
      })
    }
  }
}
