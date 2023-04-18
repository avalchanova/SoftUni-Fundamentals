function cens(sentence, word) {
    let text = sentence.split(word);
    let res = text.join("*".repeat(word.length));
    console.log(res);
}
cens('A small sentence with some words', 'small');