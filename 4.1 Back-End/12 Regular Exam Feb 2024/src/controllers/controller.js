const User = require("../models/User");
const Stone = require("../models/Stones");
const service = require('../services/service');
const { getErrorMessage } = require("../utils/errorUtils");
const validate = require('../utils/validate');

exports.getCatalog = async (req, res) => {
    const catalog = await Stone.find().lean()
    res.render('stones/catalog', { catalog });
}

exports.getCreate = (req, res) => {
    res.render('stones/create');
}

exports.postCreate = async (req, res) => {
    const stoneData = req.body;
    const user = req.user;

    try {
        validate(req.body);

        const createdStone = await Stone.create({
            owner: user._id,
            ...stoneData,
        });
    } catch(err) {
        return res.render('stones/create', {...stoneData, error: getErrorMessage(err) });
    }

    res.redirect('/catalog'); 
}

exports.getEdit = async(req, res) => {
    const id = req.params.id;
    let item = await Stone.findById(id).lean();
    console.log(item)
    res.render('stones/edit', { item });
}

exports.postEdit = async (req, res) => {
    const id = req.params.id;

    try {
        validate(req.body);

        await Stone.findOneAndUpdate({ _id: id }, req.body);

    } catch(err) {
        return res.render('stones/edit', { error: getErrorMessage(err) });
    }

    res.redirect(`/details/${id}`); 
}

exports.getDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const creator = await Stone.findById(id).populate('owner').populate('likedList').lean();
        const user = req?.user;
        const owner = creator?.owner?._id == user?._id // <-- data?
        const amISignedUp = creator['likedList'].find(x => x?._id == user?._id);
        res.render('stones/details', { creator,user, owner, likedList: creator['likedList'], amISignedUp });
    } catch(err) {
        console.log(err.message);
    }
}

exports.getDelete = async (req, res) => {
    const id = req.params.id;
    await Stone.deleteOne({ _id: id });
    res.redirect('/catalog');
}

exports.getSignUp = async (req, res) => {
    let id = req.params.id
    let stone = await Stone.findByIdAndUpdate(id, { $push: { likedList: req.user._id } })
    await User.findByIdAndUpdate(req.user._id, { $push: { likedStones: stone._id } })
    res.redirect(`/details/${id}`)
}

exports.getSearch = async (req, res)=>{
    const catalog = await Stone.find().lean()
    res.render('stones/search', { catalog });
}

exports.postSearch = async (req, res) => {
    let input = req.body.search;
    let catalog = await Stone.find({ name: new RegExp(input, 'i') }).lean();

    res.render('stones/search', { catalog });
}