const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const loginRoutes = require('./login-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;