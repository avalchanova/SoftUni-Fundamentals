function solve(arr) {
    let k = arr.shift();

    let firstResult = [];
    let secondResult = [];

    firstResult = arr.slice(0, k);
    secondResult = arr.slice(-k);

    console.log(firstResult.join(' '));
    console.log(secondResult.join(' '));
}
solve([2, 7, 8, 9]);