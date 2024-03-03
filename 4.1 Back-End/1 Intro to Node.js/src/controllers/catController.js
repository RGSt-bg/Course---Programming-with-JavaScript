const router = require('express').Router();
const multer = require('multer');
const upload = multer();

const catService = require('../services/catService');

router.get('/addBreed', (req, res) => {
    res.render('addBreed');
});

router.post('/addBreed', (req, res) => {
    const newBreed = req.body;
    
    catService.createBreed(newBreed);

    res.redirect('/addBreed');
});

router.get('/addCat', async (req, res) => {
        const breeds = await catService.getAllBreeds().lean();
        res.render('addCat', { breeds });
});

router.post('/addCat', async (req, res) => {
    const newCat = req.body;
    
    try {
        await catService.createCat(newCat);

        res.redirect('/');
        
    } catch (err) {
        console.log(err.message);
        res.redirect('/addCat');
    }
});

router.get('/editCat/:catId', async (req, res) => {
    const catId = req.params.catId;

    try {
        const cat = await catService.getOne(catId).lean();
        const allBreeds = await catService.getAllBreeds().lean();

        const breeds = allBreeds.filter(catBreed => catBreed.breed !== cat.breed);

        res.render('editCat', { cat, breeds });
    }
    catch (err) {
        console.log(err.message);
        res.redirect('/');
    }
});

router.post('/editCat/:catId', upload.none(), async (req, res) => {
    const editedCat = req.body; //Body is empty! Why?!?!
    const cats = await catService.getAll().lean();

// console.log(`editedCat => ${editedCat}`)
// console.log(`catId => ${req.params.catId}`)
console.log(req.rawHeaders)
console.log(req.body)
    try {
        await catService.edit(req.params.catId, editedCat);

        // res.render('home', { cats, isHomePage: true });
        res.redirect(`/editCat/${req.params.catId}`);
    // console.log("Working!")
    }
    catch (err) {
        console.log(err.message);
        res.redirect('/');
    }
});

module.exports = router;