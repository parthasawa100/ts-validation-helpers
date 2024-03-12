# Validation Package

This package provides functions for validating mobile numbers, email addresses, and passwords.

## Installation

You can install this package via npm:

```bash
npm install ts-validation-helpers

import { validateMobileNumberString, validateMobileNumberInt, validateEmail, validatePassword } from 'ts-validation-helpers';

// Mobile number validation (string version)
const mobileNumberString = "1234567890";
const mobileNumberValidationResultString = validateMobileNumberString(mobileNumberString) ? 'Pass' : 'Fail';
console.log(`Mobile Number Validation Result (String): ${mobileNumberValidationResultString}`);

// Mobile number validation (number version)
const mobileNumberNumber = 1234567890;
const mobileNumberValidationResultNumber = validateMobileNumberInt(mobileNumberNumber) ? 'Pass' : 'Fail';
console.log(`Mobile Number Validation Result (Number): ${mobileNumberValidationResultNumber}`);

// Email validation
const email = "example@example.com";
const emailValidationResult = validateEmail(email) ? 'Pass' : 'Fail';
console.log(`Email Validation Result: ${emailValidationResult}`);

// Password validation
const password = "Password123#";
const structure = "ULDS"; // U for uppercase, L for lowercase, D for digit, S for special character
const minLength = 8;
const passwordValidationResult = validatePassword(password, structure, minLength) ? 'Pass' : 'Fail';
console.log(`Password Validation Result: ${passwordValidationResult}`);


