const User = require('../models/User'); // Needs valid model

exports.getAll = () => User.find().lean();

exports.getById = (id) => User.findById(id).lean();

exports.findAndUpdate = (id, data) => User.findOneAndUpdate({ _id: id }, data);

exports.deleteOne = (id) => User.deleteOne({ _id: id });