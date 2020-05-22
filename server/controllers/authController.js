const User = require('../models/users')

module.exports = {
  async register (req, res) {
    try {
      const newUser = await User.create(req.body)
      newUser.save()
      res.status(201).json({
        user: newUser.toJSON()
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: e.message
      })
    }
  },
  async addUser (req, res) {
    try {
      const newUser = await User.create(req.body)
      newUser.save()
      res.status(201).json({
        msg: `${req.body.name} account created with username: ${req.body.username}`
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: e.message
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
  async updateInfo (req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body)
      user.save()
      res.status(200).json({
        msg: `${req.body.name} profile updated`,
        user: user
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: e.message
      })
    }
  },
  // need to implement actual send email functionality for below routes
  async resetPassword (req, res) {
    const email = req.body.email
    try {
      const user = await User.findOne({ email: email})
      res.status(200).json({
        msg: `Thank you, we have sent an email to ${email} with a link to reset your password.  This link will expire in 30 minutes`
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: e.message
      })
    }
  },
  async getUsername (req, res) {
    const email = req.body.email
    try {
      const user = await User.findOne({ email: email })
      res.status(200).json({
        msg: `Thank you, we have sent an email to ${email} with your user name if it exists`
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: e.message
      })
    }
  }
}
