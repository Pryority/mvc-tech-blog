const router = require('express').Router();
const apiRoutes = require('./api/index');
const homeRouter = require('./home.route')
const dashboardRouter = require('./dashboard.route')

router.get('/', homeRouter);
router.get('/dashboard', dashboardRouter);
router.use('/api', apiRoutes);

module.exports = router;