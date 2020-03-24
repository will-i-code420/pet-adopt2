const contactController = require('../controllers/contactController');
const contactControllerPolicy = require('../policies/contactControllerPolicy')

module.exports = app => {
  app.post('/contact', contactControllerPolicy.received, contactController.received)
  app.get('/contact')
}
