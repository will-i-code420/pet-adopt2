const User = require('../models/users')

module.exports = {
  async register (req, res) {
    try {

    } catch (e) {

    }
  },
  async login (req, res) {
    const {name, password} = req.body
    try {
      const user = User.find({ username: name })
      const isPassValid = await user.comparePass(password)
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
