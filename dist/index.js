"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.validateEmail = exports.validateMobileNumber = void 0;
function validateMobileNumber(number) {
    var mobileNumberRegex = /^[0-9]{10}$/;
    return mobileNumberRegex.test(number);
}
exports.validateMobileNumber = validateMobileNumber;
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
exports.validateEmail = validateEmail;
function validatePassword(password, structure, minLength) {
    var structureRegex = /^(?=.*[A-Z]*)(?=.*[a-z]*)(?=.*\d*)(?=.*[@#$%^&+=]*)[A-Za-z\d@#$%^&+=]*$/;
    if (!structureRegex.test(structure)) {
        console.error("Invalid password structure provided.");
        return false;
    }
    if (password.length < minLength) {
        console.error("Password length must be at least " + minLength + " characters.");
        return false;
    }
    var structureMap = new Map();
    structureMap.set('U', /[A-Z]/);
    structureMap.set('L', /[a-z]/);
    structureMap.set('D', /\d/);
    structureMap.set('S', /[@#$%^&+=]/);
    for (var _i = 0, structure_1 = structure; _i < structure_1.length; _i++) {
        var char = structure_1[_i];
        var regex = structureMap.get(char);
        if (!regex) {
            console.error("Invalid character in password structure: " + char);
            return false;
        }
        if (!regex.test(password)) {
            console.error("Password does not contain required character: " + char);
            return false;
        }
    }
    return true;
}
exports.validatePassword = validatePassword;
