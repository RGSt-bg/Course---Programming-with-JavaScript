const router = require('express').Router();

const homeController = require('./controllers/homeController');
const catController = require('./controllers/catController');

router.use(catController);
router.use(homeController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;