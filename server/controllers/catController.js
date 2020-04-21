const Cat = require('../models/cats')

module.exports = {
  async addCat (req, res) {
    try {
      const newCat = await Cat.create(req.body)
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
  async getAllCats (req, res) {
    try {
      const cats = await Cat.find()
      res.status(200).json({
        cats: cats
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured please try again'
      })
    }
  },
  async getSingleCat (req, res) {
    try {
      const cat = await Cat.findById(req.params.id)
      res.status(200).json({
        pet: cat
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured please try again'
      })
    }
  },
  async updateSingleCat (req, res) {
    try {
      const cat = Cat.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
        pet: cat,
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
