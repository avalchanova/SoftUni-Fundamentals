function negativeOrPositive(arr) {
    let res = [];

    //for (let i = 0; i < arr.length; i++) {
    for (let el of arr) {
        if (el < 0) {
            res.unshift(el);
        } else {
            res.push(el);
        }
    }
    console.log(res.join('\n'));
}
negativeOrPositive(['7', '-2', '8', '9']);