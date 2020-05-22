const contactController = require('../controllers/contactController');
const contactControllerPolicy = require('../policies/contactControllerPolicy')
const petController = require('../controllers/petController')
const authController = require('../controllers/authController')
const authControllerPolicy = require('../policies/authControllerPolicy')

module.exports = app => {
  app.post('/contact', contactControllerPolicy.received, contactController.received)
  app.get('/contact', contactController.getAllContacts)
  app.post('/pets', petController.addPet)
  app.put('/pets/:id', petController.updateSinglePet)
  app.get('/pets', petController.getAllPets)
  app.post('/pets/:query', petController.getSearchedPets)
  app.delete('/pets/:id', petController.deleteSinglePet)
  /* no need for route currently, may delete
  app.get('/pets/:id', petController.getSinglePet) */
  app.post('/login', authController.login)
  app.post('/register', authControllerPolicy.register, authController.register)
  app.post('/add-user', authControllerPolicy.addUser, authController.addUser)
  app.post('/edit-userInfo/:id', authControllerPolicy.updateInfo, authController.updateInfo)
  app.post('/edit-userPass/:id', authControllerPolicy.changePassword, authController.changePassword)
  app.post('/resetPassword', authControllerPolicy.reset, authController.resetPassword)
  app.post('/getUsername', authControllerPolicy.reset, authController.getUsername)
}
