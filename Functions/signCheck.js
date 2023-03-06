function signCheck(numOne, numTwo, numThree) {
    let counter = 0;
    let array = [numOne, numTwo, numThree];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            counter++;
        }

    }

    if (counter % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}
signCheck(5, 12, 15);