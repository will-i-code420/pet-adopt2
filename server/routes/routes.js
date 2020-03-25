const contactController = require('../controllers/contactController');
const contactControllerPolicy = require('../policies/contactControllerPolicy')
const dogController = require('../controllers/dogController')
const catController = require('../controllers/catController')

module.exports = app => {
  app.post('/contact', contactControllerPolicy.received, contactController.received)
  app.get('/contact')
  app.post('/dogs', dogController.addDog)
  app.get('/dogs', dogController.getAllDogs)
  app.get('/dogs/:id', dogController.getSingleDog)
  app.post('/cats', catController.addCat)
  app.get('/cats', catController.getAllCats)
  app.get('/cats/:id', catController.getSingleCat)
}
