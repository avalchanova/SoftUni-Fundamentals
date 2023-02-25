function sumDigits(num) {

    let sum = 0;
    let numString = num.toString();

    for (let i = 0; i < numString.length; i++) {
        let number = Number(numString[i]);
        sum += number;
    }
    console.log(sum);

}
sumDigits(245678);