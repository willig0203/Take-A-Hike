const router = require("express").Router();
const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');
const trailRoutes = require('./trail-routes');
// const userAuthRoutes = require('./user-auth-routes.js');
const imageRoutes = require('./image-routes');


router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/trails', trailRoutes);
// router.use('/userAuth', userAuthRoutes);
router.use('/images', imageRoutes);



module.exports = router;
