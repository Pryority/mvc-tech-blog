const router = require('express').Router();
const apiRoutes = require('./api/index');
const homeRouter = require('./Home.route')

router.get('/', (req, res) => res.render('home'));
router.get('/dashboard', (req, res) => res.render('dashboard'));
router.get('/login', (req, res) => res.render('login'));
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;