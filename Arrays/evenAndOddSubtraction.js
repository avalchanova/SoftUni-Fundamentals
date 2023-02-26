function evenAndOddSubtraction(arr) {
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    let res = sumEven - sumOdd;
    console.log(res);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);