const router = require('express').Router();
// const apiRoutes = require('./api/api-routes');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const loginRoutes = require('./login-routes')

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;