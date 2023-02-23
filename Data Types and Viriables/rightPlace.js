function rightPlace(stringOne, char, stringTwo) {
    let res = stringOne.replace("_", char);

    if (res === stringTwo) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }

}
rightPlace('Str_ng', 'I', 'Strong');