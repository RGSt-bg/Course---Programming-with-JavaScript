const electronicsService = require('../services/electronicsService');

exports.isProductOwner = async (req, res, next) => {
    const product = await electronicsService.getOne(req.params.electronicsId);

    if (product.owner != req.user?._id) {
        return res.redirect('/electronics/catalog');
    };

    next();
};

// async function isProductOwner(req, res, next) {
//     const product = await electronicsService.getOne(req.params.electronicsId);

//     if (product.owner != req.user?._id) {
//         return res.redirect('/electronics/catalog');
//     };

//     next();
// };