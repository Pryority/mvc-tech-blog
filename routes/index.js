const router = require('express').Router();
const apiRoutes = require('./api');
const homepage = require('./Home.controller');

// router.use('/', homepage);
// router.get('/', homepage.renderHomepage);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;