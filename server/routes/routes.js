const contactController = require('../controllers/contactController');
const contactControllerPolicy = require('../policies/contactControllerPolicy')
const dogController = require('../controllers/dogController')
const catController = require('../controllers/catController')
const authController = require('../controllers/authController')

module.exports = app => {
  app.post('/contact', contactControllerPolicy.received, contactController.received)
  app.get('/contact', contactController.getAllContacts)
  app.post('/dogs', dogController.addDog)
  app.put('/dogs/:id', dogController.updateSingleDog)
  app.get('/dogs', dogController.getAllDogs)
  app.get('/dogs/:id', dogController.getSingleDog)
  app.post('/cats', catController.addCat)
  app.put('/cats/:id', catController.updateSingleCat)
  app.get('/cats', catController.getAllCats)
  app.get('/cats/:id', catController.getSingleCat)
  app.post('/login', authController.login)
  app.post('/register', authController.register)
}
