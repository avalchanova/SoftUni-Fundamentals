function maxSequenceEqualElements(array) {

    let maxSeq = [];

    for (let i = 0; i < array.length; i++) {
        let currentSeq = [];
        for (let k = i; k < array.length; k++) {
            if (array[i] === array[k]) {
                currentSeq.push(array[k]);
            } else {
                break;
            }
        }
        if (currentSeq.length > maxSeq.length) {
            maxSeq = currentSeq;
        }
    }
    console.log(maxSeq.join(' '));
}
maxSequenceEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);