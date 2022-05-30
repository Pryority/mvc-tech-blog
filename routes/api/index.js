const router = require('express').Router();

const userRoute = require('./User.route.js');
const postRoute = require('./Post.route.js');

router.use('/users', userRoute);
router.use('/posts', postRoute);

module.exports = router;