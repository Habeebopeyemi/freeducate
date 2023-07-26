const express = require("express");
const { body } = require("express-validator");
const User = require("../model/users");
const Admin = require("../model/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.put("/signup", [], isAuth);
router.post("/login");

module.exports = router;
