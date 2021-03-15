const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // },
    role: {
        type: String,
        default: 'publisher',
        enum: ['admin', 'publisher']
    },
    address: String
})

const User = mongoose.model('user', userSchema)

module.exports = { User }