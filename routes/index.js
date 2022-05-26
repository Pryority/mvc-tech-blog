const router = require('express').Router();
const apiRoutes = require('./api/api-routes');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./api/dashboard-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = routes;