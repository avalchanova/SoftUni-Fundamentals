function arrayRot(array) {

    let newArr = [];
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        let number1 = array[i];
        let isBiggest = true;

        for (let j = i + 1; j < arrayL; j++) {
            let number2 = array[j];

            if (number1 <= number2) {
                isBiggest = false;
            }
        }
        if (isBiggest) {
            newArr.push(number1);
        }
    }
    console.log(newArr.join(' '));
}
arrayRot([1, 4, 3, 2]);