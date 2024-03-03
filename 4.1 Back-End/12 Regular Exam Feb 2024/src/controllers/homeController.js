const Stone = require("../models/Stones.js");
exports.getHome = async(req, res) => {
    let courses = await Stone.find().lean();
    let neededStones = courses.slice(-3);
    res.render('home/home',{neededStones});
}

exports.get404 = (req, res) => {
    res.render('home/404');
}
