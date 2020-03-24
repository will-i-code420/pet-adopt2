const Joi = require('@hapi/joi')

module.exports = {
  received (req, res, next) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      info: Joi.string().min(10).required()
    })
    const { error, value } = schema.validate(req.body)
    if (error) {
      switch(error.details[0].context.key) {
        case 'name':
          res.status(409).json({
            msg: 'Please provide valid name'
          })
        break;
        case 'email':
        res.status(409).json({
          msg: 'Please provide valid email address'
        })
        break;
        case 'info':
        res.status(409).json({
          msg: 'Please provide some info about your request'
        })
        break;
      }
    } else {
      next()
    }
  }
}
