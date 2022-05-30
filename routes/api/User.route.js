const router = require('express').Router();
const userController = require('../../controller/userController')

router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)

router.get('/:id', userController.getUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.get('/login', userController.login);

module.exports = router;
