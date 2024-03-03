const jwt = require('../lib/jsonwebtoken');
const Stones = require("../models/Stones.js");
const secret = 'myveryppsecret';

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if (token) {
        try {
            const decodedToken = await jwt.verify(token, secret);

            req.user = decodedToken;

            res.locals.isAuth = true;
            res.locals.user = decodedToken;

        } catch (err) {
            res.clearCookie('auth');
            console.log(err.message)
            return res.status(401).redirect('/404');
        }
    } else {
        res.locals.isAuth = false;
    }

    next();
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/');
    }

    next()
}

exports.isGuest = (req, res, next) => {
    if (req.user) {
        return res.redirect('/');
    }

    next()
}

exports.canDo = async (req, res, next) => {
    let id = req.params.id;
    let owner = await Stones.findById(id).populate('owner').lean();

    if (req.user._id != owner.owner._id) {
        return res.redirect('/');
    }

    next();

}


exports.cantDo = async (req, res, next) => {
    let id = req.params.id;
    let item = await Stones.findById(id).populate('likedList').lean();
    const amISignedUp = item['likedList'].find(x => x?._id == req.user?._id);

    if (req.user._id == item.owner._id || amISignedUp) {
        return res.redirect('/');
    }

    next();
}