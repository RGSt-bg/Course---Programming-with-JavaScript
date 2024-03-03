function validate(obj) {
    for (let data in obj) {
        if (!obj[data]) {
            throw new Error('Please fill all fields');
        }
    }

    return;
}

module.exports = validate;