const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('dashboard');
    console.log('this is the dashboard')
});

module.exports = router;