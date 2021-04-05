const router = require("express").Router();
const { createUser,getUsers}  = require("../controller/user-controller")

router.post("/",createUser);
router.get("/", getUsers);

module.exports = router