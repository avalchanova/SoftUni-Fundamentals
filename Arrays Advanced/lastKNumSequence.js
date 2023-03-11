function lastKNumSequence(n, k) {
    let res = [1];

    for (let i = 0; i < n - 1; i++) {
        let sequenceK = res.slice(-k);
        let sum = 0;
        for (let el of sequenceK) {
            sum += el;
        }
        res.push(sum);
    }
    console.log(res.join(' '));
}
lastKNumSequence(6, 3);
//1 1 2 4 7 13