const router = require('express').Router();

const electronicsService = require('../services/electronicsService');
const { isAuth } = require('../middlewares/authMiddleware');
const { isProductOwner } = require('../middlewares/userMiddleware');
const { getErrorMessage } = require('../utils/errorUtil');
const Electronic = require('../models/Electronic');
const { query } = require('express');

router.get('/catalog', async (req, res) => {
    const electronics = await electronicsService.getAll().lean();
    res.render('electronics/catalog', { electronics });
});

router.get('/create', isAuth, async (req, res) => {
    res.render('electronics/create');
});

router.post('/create', isAuth, async (req, res) => {
    const newElectronics = req.body;
    try {
        await electronicsService.create(req.user._id, newElectronics);

        res.redirect('/electronics/catalog');

    } catch (err) {
        console.log(err.message);
        res.render('electronics/create', { ...newElectronics, error: getErrorMessage(err) });
    }
});

router.get('/details/:electronicsId', async (req, res) => {
    const electronicsId = req.params.electronicsId;
    const isBuyer = await isProductBuyer(req, res);

    let isLoggedIn = false;
    if (req.cookies['auth']) isLoggedIn = true;

    try {
        const device = await electronicsService.getOneDetailed(electronicsId).lean();
        const isOwner = device.owner?._id == req.user?._id;

        res.render('electronics/details', { device, isOwner, isLoggedIn, isBuyer });
    }
    catch (err) {
        console.log(err.message);
        res.render('/electronics/catalog', { error: getErrorMessage(err) });
    }
});

router.get('/buy/:electronicsId', async (req, res) => {

    const electronicsId = req.params.electronicsId;
    const isBuyer = isProductBuyer(req, res);

    let isLoggedIn = false;
    if (req.cookies['auth']) isLoggedIn = true;

    try {
        await electronicsService.buy(req.user._id, electronicsId)
        const device = await electronicsService.getOneDetailed(electronicsId).lean();
        const isOwner = device.owner?._id == req.user?._id;

        res.render('electronics/details', { device, isOwner, isLoggedIn, isBuyer });
    }
    catch (err) {
        console.log(err.message);
        res.render('/electronics/catalog', { error: getErrorMessage(err) });
    }
});

router.get('/edit/:electronicsId', isAuth, async (req, res) => {

    const electronicsId = req.params.electronicsId;

    try {
        const device = await electronicsService.getOne(electronicsId).lean();
        res.render('electronics/edit', { device });
    }
    catch (err) {
        console.log(err.message);
        res.render('/electronics/catalog', { ...device, error: getErrorMessage(err) });
    }
});

router.post('/edit/:electronicsId', isAuth, async (req, res) => {
    const editedElectronics = req.body;

    try {
        await electronicsService.edit(req.params.electronicsId, editedElectronics);
        res.redirect(`/electronics/details/${req.params.electronicsId}`);
    }
    catch (err) {
        res.render('/electronics/edit/${req.params.electronicsId}', { ...editedElectronics, error: getErrorMessage(err) });
    }
});

router.get('/delete/:electronicsId', isProductOwner, async (req, res) => {

    await electronicsService.delete(req.params.electronicsId);

    res.redirect('/electronics/catalog');
});

async function isProductBuyer(req, res) {
    const userId = req.user?._id;
    const electronicsId = req.params.electronicsId;
    const isBuyer = await Electronic.findOne({ buyingList: userId, _id: electronicsId });

    if (!isBuyer) {
        return false;
    };

    return true;
};

router.get('/search', async (req, res) => {

    let electronics, name, type;

    if (Object.keys(req.query).length === 0) {
        electronics = await electronicsService.getAll().lean();
    }
    else {
        const { name, type } = req.query;
        electronics = await electronicsService.search(name, type).lean();
    }

    res.render('electronics/search', { electronics, name, type });
});

module.exports = router;