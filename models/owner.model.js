const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
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
        default: 'owner'
    }
}, {timestamps: true});

const owner = mongoose.model('owner', ownerSchema);

module.exports = owner;