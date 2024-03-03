const router = require('express').Router();

const catService = require('../services/catService');

router.get("/", async (req, res) => {
    const cats = await catService.getAll().lean();
    let isHomePage = false;

    if (req.path === '/') isHomePage = true;
    res.render('home', { cats, isHomePage });
});

router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;