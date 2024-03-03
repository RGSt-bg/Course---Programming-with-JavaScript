const mongoose = require('mongoose');

const stoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: 2,
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        minLength: 3,
    },
    color: {
        type: String,
        required: [true, 'Color is required'],
        minLength: 2,
    },
    image: {
        type: String,
        required: [true, 'Gem\'s image is required'],
        match: [/https?:\/\//, 'Please, fill a valid HTTP address!'],
    },
    formula: {
        type: String,
        required: [true, 'Formula is required'],
        minLength: 3,
        maxLength: 30
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        minLength: 5,
        maxLength: 15
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: 10,
    },
    likedList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Stone = mongoose.model('Stone', stoneSchema);

module.exports = Stone;