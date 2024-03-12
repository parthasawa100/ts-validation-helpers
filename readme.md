# Validation Package

This package provides functions for validating mobile numbers, email addresses, and passwords.

## Installation

You can install this package via npm:

```bash
npm install ts-validation-helpers

import { validateMobileNumber, validateEmail, validatePassword } from 'ts-validation-helpers';

// mobile number validation
const mobileNumber = "1234567890";
const mobileNumberValidationResult = validateMobileNumber(mobileNumber) ? 'Pass' : 'Fail';
console.log(`Mobile Number Validation Result: ${mobileNumberValidationResult}`);

// email validation
const email = "example@example.com";
const emailValidationResult = validateEmail(email) ? 'Pass' : 'Fail';
console.log(`Email Validation Result: ${emailValidationResult}`);

// password validation
const password = "Password123#";
const structure = "ULDS"; // U for uppercase, L for lowercase, D for digit, S for special character
const minLength = 8;
const passwordValidationResult = validatePassword(password, structure, minLength) ? 'Pass' : 'Fail';
console.log(`Password Validation Result: ${passwordValidationResult}`);

