function solve(arr) {
    let searchWords = arr.shift().split(" ");
    //console.log();

    //console.log(arr[0]);
    let res = [];

    for (let word of searchWords) {
        // console.log(word);
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === word) {
                sum++;
            }
        }
        res.push({ word: sum });
        console.log(res);
    }

}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to',
    'count', 'the', 'occurrences', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because',
    'this', 'is', 'your', 'task']);