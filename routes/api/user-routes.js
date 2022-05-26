const router = require('express').Router();
const userController = require('../../controller/userController')

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

router.route('/:id')
    .get(userController.getUser)

module.exports = router;