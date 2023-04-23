function revealWords(string, sentence) {
    let splittedWords = string.split(", ");
    let sentenceArr = sentence.split(" ");

    for (let word of splittedWords) {
        let length = word.length;

        for (let el of sentenceArr) {
            if (el.includes("*") && el.length == length) {
                sentence = sentence.replace(el, word);
            }
        }
    }
    console.log(sentence);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);