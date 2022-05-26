const router = require('express').Router();
const apiRoutes = require('./api/api-routes');
const homeRoutes = require('./api/home-routes');
const dashboardRoutes = require('./api/dashboard-routes');

router.use('/', apiRoutes);
router.use('/', homeRoutes);
router.use('/', dashboardRoutes);

router.get('/', (req, res) => {
    // if logged in, render homepage
    res.send('Hello World!')
});

module.exports = routes;