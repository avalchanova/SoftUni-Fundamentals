function addAndSubstract(a, b, c) {

    let sum = (a, b) => a + b;
    let substract = (sumTwoNums, c) => sumTwoNums - c;

    let sumTwoNums = sum(a, b);

    console.log(substract(sumTwoNums, c));
}
addAndSubstract(1, 17, 30);