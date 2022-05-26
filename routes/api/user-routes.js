const router = require('express').Router();
const userController = require('../../controller/userController')

router.get('/', (req, res) => {
    userController.getAllUsers
});

router.get('/:id', (req, res) => {
    userController.getUser
});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {
    userController.updateUser
});

router.delete('/:id', (req, res) => {
    userController.deleteUser
});

module.exports = router;