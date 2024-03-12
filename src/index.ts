function validateMobileNumberString(number: string): boolean {
    const mobileNumberRegex = /^[0-9]{10}$/;
    return mobileNumberRegex.test(number);
}

function validateMobileNumberInt(number: number): boolean {
    const mobileNumberString = number.toString().replace(/^0+/, '');
    const mobileNumberRegex = /^[0-9]{10}$/;
    return mobileNumberRegex.test(mobileNumberString);
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password: string, structure: string, minLength: number): boolean {
    const structureRegex = /^(?=.*[A-Z]*)(?=.*[a-z]*)(?=.*\d*)(?=.*[@#$%^&+=]*)[A-Za-z\d@#$%^&+=]*$/;
    if (!structureRegex.test(structure)) {
        console.error("Invalid password structure provided.");
        return false;
    }

    if (password.length < minLength) {
        console.error(`Password length must be at least ${minLength} characters.`);
        return false;
    }

    const structureMap = new Map<string, RegExp>();
    structureMap.set('U', /[A-Z]/);
    structureMap.set('L', /[a-z]/);
    structureMap.set('D', /\d/);
    structureMap.set('S', /[@#$%^&+=]/);

    for (const char of structure) {
        const regex = structureMap.get(char);
        if (!regex) {
            console.error(`Invalid character in password structure: ${char}`);
            return false;
        }

        if (!regex.test(password)) {
            console.error(`Password does not contain required character: ${char}`);
            return false;
        }
    }

    return true;
}

export { validateMobileNumberString,validateMobileNumberInt, validateEmail, validatePassword };
