const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: 10,
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        minLength: 2,
    },
    damages: {
        type: String,
        required: [true, 'Damages is required'],
        minLength: 10,
    },
    imageUrl: {
        type: String,
        required: [true, 'Electronic\'s image is required'],
        match: [/https?:\/\//, 'Please, fill a valid HTTP address!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: 10,
        maxLength: 200
    },
    production: {
        type: Number,
        required: [true, 'Year of production is required'],
        minLength: 2,
        min: 1900,
        max: 2023
    },
    exploitation: {
        type: Number,
        required: [true, 'Exploitation period is required'],
        gt: 0
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        gt: 0
    },
    buyingList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Electronic = mongoose.model('Electronic', electronicSchema);

module.exports = Electronic;