const User = require('../models/users')

module.exports = {
  async register (req, res) {
    try {
      const newUser = await User.create(req.body)
      res.status(201).json({
        user: newUser.toJSON()
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured, please try again'
      })
    }
  },
  async login (req, res) {
    const {name, password} = req.body
    try {
      const user = await User.findOne({ username: name })
      const validPassword = await user.comparePassword(password)
      if (!user || !validPassword) {
        return res.status(404).json({
          msg: 'Incorrect Login Credentials'
        })
      }
      res.status(200).json({
        user: user.toJSON()
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'Server Error Occured, please try again'
      })
    }
  }
}
