const router = require('express').Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const {User}= require('../models/user.model')


const userDto = require("../dto/user.dto")
const {JWT_SECRET} = require('../config/secrets')



router.post('/signin', async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if (!user) return res.status(404).json({msg: 'User Not Found'})

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) return res.status(400).json({msg: 'Incorrect Email Or Password'})

    const userData = userDto(user)

    const token = jwt.sign(userData, JWT_SECRET)

    res.json({user: userData, token})


})


router.post('/signup', async (req, res) => {

    const {email, name, password} = req.body;


    const user =  new User({email, name})

    const hashedPassword = bcrypt.hashSync(password, 10)

    user.password = hashedPassword;

    await user.save();

    res.json({
        msg: 'User Created Successfully',
        user: userDto(user)
    });
})

module.exports = router;