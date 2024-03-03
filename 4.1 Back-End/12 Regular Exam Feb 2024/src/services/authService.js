const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');

const secret = 'myveryppsecret';

// exports.finByUsername = (username) => User.findOne({ username });

exports.findByEmail = (email) => User.findOne({ email });

exports.register = async ( email, password, rePass) => {
    // Validate passwords
    if (password !== rePass) {
        throw new Error('Password missmatch');
    }

    // Check if user exists
    const existingUser = await this.findByEmail(email);

    if (existingUser) {
        throw new Error('User exists');
    }

    // Validate main password

    const hashPass = await bcrypt.hash(password, 10);

    await User.create({email, password: hashPass });

    return this.login(email, password);
}

exports.login = async (email, password) => {
    // User exists
    const user = await this.findByEmail(email);

    if (!user) {
        throw new Error('Invalid email or password');
    }

    // Password is valid
    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
        throw new Error('Invalid email or password');
    }

    // Generate token
    // const payload = JSON.stringify({ _id: user._id, email, username: user.username });
    const payload = { _id: user._id, email };
    const token = await jwt.sign(payload, secret);

    return token;
}