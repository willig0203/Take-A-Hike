const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const userAuthRoutes = require("./user-auth-routes.js");

router.use("/users", userRoutes);
router.use("/userAuth", userAuthRoutes);

module.exports = router;
