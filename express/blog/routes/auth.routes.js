const express = require("express");
const router = express.Router();

const { User } = require("../models/user.model");

// /auth/login
router.post("/login", (req, res) => {
  res.json({ msg: "Login Route" });
});

router.post("/signup", async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  const user = new User({
    name,
    email,
    password,
    phoneNumber: phone,
    address,
  });

  await user.save()

  res.json({user})
});

module.exports = router;
