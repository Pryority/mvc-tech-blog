const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login')
    console.log('this is the login')
});

module.exports = router;