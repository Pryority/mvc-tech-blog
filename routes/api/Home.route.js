const router = require('express').Router();
const homeController = require("../Homepage.controller");

router.use('/login', homeController.renderLogin);

module.exports = router;