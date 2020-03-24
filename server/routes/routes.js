const contactController = require('../controllers/contactController');

module.exports = app => {
  app.post('/contact', contactController.received)
  app.get('/contact')
}
