const router = require('express').Router();

router.get('/', (req, res) => {
    const threeStones = req.query.threeStones;
    res.render('home',{threeStones});
    // res.render('home');
});

module.exports = router;