const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
    breed: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 20
    }
});

const Breed = mongoose.model('Breed', breedSchema);

module.exports = Breed;