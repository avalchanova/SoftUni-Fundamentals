function addAndSubstract(input) {
    let newSum = 0;
    let oldSum = 0;
    let inputL = input.length;
    let newArray = [];

    for (let i = 0; i < inputL; i++) {
        oldSum += input[i];
        if (input[i] % 2 === 0) {
            input[i] += i;
        } else {
            input[i] -= i;
        }
        newArray.push(input[i]);
        newSum += input[i];
    }
    console.log(newArray);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35]);