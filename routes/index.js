const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./api/Home.route');
const homeController = require('./api/Home.route');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;