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
      if (!user) {
        return res.status(404).json({
          msg: 'Incorrect Login Credentials'
        })
      }
      const validPassword = await user.comparePassword(password)
      if (!validPassword) {
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
  },
  // need to implement actual send email functionality for below routes
  async resetPassword (req, res) {
    try {
      const user = await User.findOne({ email: req.body })
      res.status(200).json({
        msg: `Thank you, we have sent an email to ${req.body} with a link to reset your password.  This link will expire in 30 minutes`
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'Server Error Occured, please try again'
      })
    }
  },
  async getUsername (req, res) {
    try {
      const user = await User.findOne({ email: req.body })
      res.status(200).json({
        msg: `Thank you, we have sent an email to ${req.body} with your user name if it exists`
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'Server Error Occured, please try again'
      })
    }
  }
}
