const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('homepage')
    console.log('i should be displaying the homepage')
});

module.exports = router;