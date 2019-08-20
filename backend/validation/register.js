const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    //Convert empty fields to empty string

    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    //username Check

    if (Validator.isEmpty(data.username)) {
        errors.username = "username field is required!";
    }

    //Email Check 
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required!";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }

    //Password Check

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required!";
    }

    if (Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm password";
    }

    if (!Validator.isLength(data.password, {min:6,max:30})) {
        errors.password = "Password must be atleast 6 characters long!";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match!";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
    
};