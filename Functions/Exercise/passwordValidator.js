function passwordValidator(input) {
    let l = input.length;
    let digitSum = 0;
    let lengthFlag = false;
    let asciiFlag = false;
    let digitsFlag = false;
    let falseChars = 0;

    if (l > 5 && l < 11) {
        lengthFlag = true;
    }
    for (let i = 0; i < input.length; i++) {
        if ((input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) || (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122)) {
            asciiFlag = true;
        } else if (input.charCodeAt(i) >= 48 && input.charCodeAt(i) <= 57) {
            asciiFlag = true;
            digitSum++;
        } else {
            //console.log(input.charCodeAt(i));
            falseChars++;
        }
    }

    if (digitSum >= 2) {
        digitsFlag = true;
    }
    if (falseChars > 0) {
        asciiFlag = false;
    }
    if (!lengthFlag) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!asciiFlag) {
        console.log("Password must consist only of letters and digits");
    }
    if (!digitsFlag) {
        console.log("Password must have at least 2 digits");
    }
    if (digitsFlag && asciiFlag && lengthFlag) {
        console.log("Password is valid");
    }
}
passwordValidator('MyPass123');