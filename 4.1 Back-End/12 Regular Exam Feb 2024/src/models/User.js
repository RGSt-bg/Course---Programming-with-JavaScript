const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        minLength: 10,
        required: [true, 'Email required']
    },
    password: {
        type: String,
        minLength: 4,
        required: [true, 'Password required']
    },
    likedStones: [{
        type: mongoose.Types.ObjectId,
        ref: 'Stones',
    }],
   
});

const User = mongoose.model('User', userSchema);

module.exports = User;