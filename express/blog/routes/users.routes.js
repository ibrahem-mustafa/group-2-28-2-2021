// const express = require('express');
// const router = express.Router()

const router = require('express').Router()

const {ValidateToken} = require('../middleware/validation/validateToken.middleware');
const {IsAdmin} = require('../middleware/users/isAdmin.middleware');

const {User} = require('../models/user.model')


router.get('/', ValidateToken, IsAdmin, async (req, res) => {
    const users = await User.find({role: {$ne: 'admin'}})

    res.status(200).json({ users });
})


router.delete('/:id', ValidateToken, IsAdmin, async (req, res) => {
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.status(200).json({msg: "User Deleted Successfully"})
})


module.exports = router