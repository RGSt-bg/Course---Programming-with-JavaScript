const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        // minLength: 3,
        // maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        required: [true, 'Email is required'],
        // minLength: 3,
        // maxLength: 20
    },
    password: {
        type: String,
        required: true,
        required: [true, 'Password is required'],
        // minLength: 3,
        // maxLength: 20
    }
});

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
});

// userSchema.virtual('rePassword')
//     .set(function(value) {
//         if (value !== this.password)
//             throw new Error('Password missmatch!');
//     });

const User = mongoose.model('User', userSchema);

module.exports = User;