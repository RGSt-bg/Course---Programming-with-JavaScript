const Breed = require("../models/Breed");
const Cat = require("../models/Cat");

exports.getAll = () => Cat.find();

exports.getOne = (catId) => Cat.findById(catId);

exports.createCat = (catData) => Cat.create(catData);

exports.createBreed = (breedData) => Breed.create(breedData);

exports.getAllBreeds = () => Breed.find();

exports.edit = (catId, catData) => Cat.findByIdAndUpdate(catId, catData);

exports.search = async (name, breed) => {
    let result = await Cat.find().lean();

    if (name) {
        result = result.filter(cat => cat.name.includes(name));
    };

    if (breed) {
        result = result.filter(cat => cat.breed.includes(breed));
    };
console.log(result)
    return result;
};