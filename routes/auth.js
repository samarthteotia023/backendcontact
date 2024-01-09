const router = require("express").Router();
const authRoute = require("../controllers/auth");
//REGISTER
router.post("/register",authRoute.register);
//LOGIN
router.post("/login",authRoute.login)
module.exports = router;