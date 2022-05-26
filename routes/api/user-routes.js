const router = require('express').Router();
const userController = require('../../controller/userController')

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser)

router.route('/:id')
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

router.route('/login')
    .post(userController.login)

module.exports = router;