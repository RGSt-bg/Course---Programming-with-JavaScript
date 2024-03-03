const mongoose = require('mongoose');

exports.getErrorMessage = (err) => {
    switch (err.name) {
        case 'Error':
            return err.message;

        case 'ValidationError':
            return getMongooseErr(err);

        default: 
            return err.message;
    }
}

function getMongooseErr(err) {
    const errors = Object.keys(err.errors).map(key => err.errors[key].message);
    return errors[0];
}