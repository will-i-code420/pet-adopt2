const Joi = require('@hapi/joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      username: Joi.string().min(4).max(30).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
    })
    const { error, value } = schema.validate(req.body)
    if (error) {
      console.log(error)
      switch(error.details[0].context.key) {
        case 'name':
          res.status(409).json({
            msg: 'Please provide valid name, at least 3 characters'
          })
        break;
        case 'email':
        res.status(409).json({
          msg: 'Please provide valid email address'
        })
        break;
        case 'username':
        res.status(409).json({
          msg: 'Please create a username between 4 and 30 characters in length'
        })
        break;
        case 'password':
        res.status(409).json({
          msg: `Provided password failed to match 1 or both rules:
          <br>
          1. Must contain the following characters: lowercase, uppercase, or numbers. No spaces or special characters
          <br>
          2. Must be between 8 and 32 characters in length`
        })
        break;
        default:
        res.status(409).json({
          msg: 'An Error Occured, please try again'
        })
      }
    } else {
      next()
    }
  }
}
