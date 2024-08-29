const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },

    price: {
        type: Number,
    },

    discount: {
        type: Number
    },
    bgcolor: {
        type: String
    },
    panelcolor: {
        type: String
    },
    textcolor: {
        type: String
    },

    imageUrl: {
        type: String,
    }
}, {timestamps: true});

const product = mongoose.model('product', productSchema);

module.exports = product;