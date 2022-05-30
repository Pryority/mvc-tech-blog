const router = require('express').Router();
const userController = require('../User.controller')

router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)

router.get('/:id', userController.getUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
