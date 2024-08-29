const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },

    email: {
        type: String,
    },

    password: {
        type: String
    },

    role: {
        type: String,
        default: 'user'
    }
}, {timestamps: true});

const user = mongoose.model('user', userSchema);

module.exports = user;