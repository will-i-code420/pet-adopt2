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
        msg: e.message
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
        msg: e.message
      })
    }
  },
  async getSearchedPets (req, res) {
    const query = new RegExp(req.params.query, 'i')
    const type = req.body.type
    try {
      let pets = await Pet.find({ [type]: query })
      console.log(pets)
      if (!pets) {
        res.status(200).json({
          pets: `No Results Matching ${req.params.query}`
        })
      } else {
        res.status(200).json({
          pets: pets
        })
      }
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: e.message
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
      const pet = await Pet.findByIdAndUpdate(req.params.id, req.body)
      await pet.save()
      res.status(202).json({
        msg: `Updated ${req.body.name} information`
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: e.message
      })
    }
  },
  async deleteSinglePet (req, res) {
    try {
      const pet = Pet.findByIdAndDelete(req.params.id)
      res.status(202).json({
        msg: 'Deleted Pet'
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: e.message
      })
    }
  }
}
