const User = require('../models/users')

module.exports = {
  async register (req, res) {
    try {
      const newUser = await User.create(req.body)
      res.status(200).json({
        user: newUser
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
      const user = User.find({ username: name })
      const isPassValid = await user.comparePassword(password)
      if (!user || !isPasswordValid) {
        return res.status(404).json({
          msg: 'Incorrect Login Credentials'
        })
      }
      res.status(201).json({
        user: user
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'Server Error Occured, please try again'
      })
    }
  }
}
