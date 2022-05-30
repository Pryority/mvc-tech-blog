const router = require('express').Router();

const home = require('./Home.route.js');
const userRoutes = require('./User.route.js');
const postRoutes = require('./Post.route.js');


router.use('/', home);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;