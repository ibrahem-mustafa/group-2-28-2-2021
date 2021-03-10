const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../models/user.model");
const {UserDto} = require('../dto/user.dto')

// /auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // check if user exists with given email
  // if user exists
  // => // match user password (in Database) with given password (from request)
  // ===> if user passwords matched return user data
  // ===> if not: return with error
  // else
  // => response with error


  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({msg: "User Not Found"})

  const validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword) return res.status(400).json({msg: "Incorrect Email Or Password"})
  res.json({user: UserDto(user)})
});

router.post("/signup", async (req, res) => {
  const { name, email, password, phone, address } = req.body;

  const existsUser = await User.findOne({email})

  if (existsUser) {
    return res.status(400).json({msg: "User Already Exists",})
  }

  const user = new User({
    name,
    email,
    phoneNumber: phone,
    address,
  });

  const hashedPassword = bcrypt.hashSync(password, 10)

  user.password = hashedPassword;

  await user.save()

  res.status(201).json({user: UserDto(user)})
});

module.exports = router;
