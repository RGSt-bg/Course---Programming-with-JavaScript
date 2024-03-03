const User = require('../models/User');
const Electronic = require('../models/Electronic');

exports.getAll = () => Electronic.find();

exports.getOne = (electronicsId) => Electronic.findById(electronicsId);

exports.getOneDetailed = (electronicsId) => this.getOne(electronicsId).populate('owner');

exports.create = async (userId, electronicData) => {
    const createdProduct = await Electronic.create({
        owner: userId,
        ...electronicData
    });

    await User.findByIdAndUpdate(userId, {$push: {createdProducts: createdProduct._id}})
};

exports.buy = async (userId, electronicsId) => {
    await Electronic.findByIdAndUpdate(electronicsId, {$push: {buyingList: userId}})
};

exports.edit = (electronicsId, electronicData) => Electronic.findByIdAndUpdate(electronicsId, electronicData);

exports.delete = (electronicsId) => Electronic.findByIdAndDelete(electronicsId);

exports.search = (name, type) => {
    let query = {};

    if (name) {
        query.name = name;
    }

    if (type) {
        query.type = type;
}
    return Electronic.find(query);
};
