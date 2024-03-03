const User = require('../models/User');
const Stone = require('../models/Stone');

exports.getAll = () => Stone.find();

exports.getThreeStones = async(req, res) => {
    const stones = await Stone.find().lean();
    return threeStones = stones.slice(-3);
}

exports.getOne = (stoneId) => Stone.findById(stoneId);

exports.getOneDetailed = (stoneId) => this.getOne(stoneId).populate('owner');

exports.create = async (userId, stoneData) => {
    const addedStone = await Stone.create({
        owner: userId,
        ...stoneData
    });

    await User.findByIdAndUpdate(userId, { $push: { addedList: addedStone._id } })
};

exports.like = async (userId, stoneId) => {
    await Stone.findByIdAndUpdate(stoneId, { $push: { likedList: userId } })
};

exports.edit = (stoneId, stoneData) => Stone.findByIdAndUpdate(stoneId, stoneData);

exports.delete = (stoneId) => Stone.findByIdAndDelete(stoneId);

exports.search = async(name) => {

    const partialString = name;

    return await Stone.find({ name: new RegExp(partialString, 'i') }).lean();
};