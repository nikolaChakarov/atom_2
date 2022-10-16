const router = require("express").Router();
const { register, login } = require("../controllers/user");
const { checkUserReg, checkUserLog } = require("../middlewares/checkUser");

router.post("/register", checkUserReg, register);
router.post("/login", checkUserLog, login);

module.exports = router;
