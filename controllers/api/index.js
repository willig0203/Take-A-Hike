const router = require("express").Router();
const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');
const trailRoutes = require('./trail-routes');
const imageRoutes = require('./image-routes');
// const userAuthRoutes = require('./user-auth-routes.js');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/trails', trailRoutes);
router.use('/images', imageRoutes);
// router.use('/userAuth', userAuthRoutes);

module.exports = router;
