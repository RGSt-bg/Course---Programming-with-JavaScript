const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorUtils');

exports.getLogin = (req, res) => {
    res.render('auth/login');
}

const errorResponse = (res, template, err, status = 400) => {
    return res.status(404).render('auth/login', { error: getErrorMessage(err) });
}

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);
        res.cookie('auth', token);
    } catch(err) {
        return res.status(404).render('auth/login', { email,error: getErrorMessage(err) });
    }
    
    res.redirect('/'); // where to redirect after login
}

exports.getRegister = (req, res) => {
    res.render('auth/register');
}

exports.postRegister = async (req, res) => {
    const {email, password, rePass } = req.body;

    try {
        const token = await authService.register( email, password, rePass);
        
        res.cookie('auth', token);
    } catch (err) {
        return res.status(400).render('auth/register', {email ,error: getErrorMessage(err) });
    }

    res.redirect('/'); // where to redirect
}

exports.getLogout = (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
}

exports.getSearch = (req,res) =>{
    
}