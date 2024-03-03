const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     required: true
    // },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        maxLength: 500
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/https?:\/\//, 'Please, fill a valid HTTP address!']
        // match: /https?:\/\//
    },
    breed: {
        type: String,
        required: true
    },
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;