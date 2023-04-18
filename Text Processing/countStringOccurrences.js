function countStringOccurrences(sentence, word) {
    let sentenceArr = sentence.split(" ");
    //  console.log(sentenceArr);
    let count = 0;

    for (let el of sentenceArr) {
        if (el === word) {
            count++;
        }
    }
    console.log(count);

    console.log("\t Hello");
}
countStringOccurrences('This is a word and it also is a sentence',
    'is');