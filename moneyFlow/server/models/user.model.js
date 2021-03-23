const {Schema, model} = require('mongoose')


const userSchema = new Schema({
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
    branches: [{
        name: {
            type: String,
            require: true
        },
        balance: {
            type: Number, 
            default: 0
        }
    }],
    transactions: [{
        type: {
            type: String,
            default: 'expense',
            enum: ['expense', 'income', 'transfer']
        },
        from: {
            name: {
                type: String,
                require: true
            },
            id: {
                type: String,
                required: true
            }
        },
        to: {
            name: {
                type: String,
                require: true
            },
            id: {
                type: String,
                required: true
            }
        },
        amount: {
            type: Number,
            default: 0
        },
        note: {
            type: String,
            default: ''
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]

})

const User = model('users', userSchema)

module.exports = {User}