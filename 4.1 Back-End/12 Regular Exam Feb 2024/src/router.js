const router = require('express').Router();
const { isGuest, isAuth, canDo,cantDo } = require('./middlewares/authMiddleware.js')
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const controller = require('./controllers/controller');

router.get('/', homeController.getHome);

router.route('/login')
.get( isGuest,authController.getLogin)
.post(authController.postLogin);

router.route('/register')
.get(isGuest,authController.getRegister)
.post(authController.postRegister);

router.get('/logout', authController.getLogout);

router.get('/catalog', controller.getCatalog)

router.route('/create')
.get(isAuth,controller.getCreate)
.post(controller.postCreate);

router.route('/edit/:id')
.get(isAuth, canDo, controller.getEdit)
.post(controller.postEdit);

router.get('/details/:id', controller.getDetails);

router.get('/delete/:id', isAuth, canDo, controller.getDelete);

router.get('/like/:id', isAuth, cantDo, controller.getSignUp)

router.route('/search')
.get(isAuth, controller.getSearch)
.post(controller.postSearch);

router.get('*', homeController.get404);

module.exports = router;