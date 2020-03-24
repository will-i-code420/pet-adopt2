const Contact = require('../models/contact')

module.exports = {
  async received (req, res) {
    const { name, email, info } = req.body
    try {
      console.log(`${name} wants ${info} sent to ${email}`)
      const newContact = await Contact.create(req.body)
      res.status(200).json({
      msg: `Thank You ${name}, we have received your request and will send a response to ${email} within 24 hours`
    })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        msg: 'An error occured please try again'
      })
    }
  }
}
