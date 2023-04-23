function stringSubstring(word, text) {
    let textLower = text.toLowerCase();
    let wordLower = word.toLowerCase();
    let textArr = textLower.split(" ");
    let found = false;

    for (let el of textArr) {
        if (el === wordLower) {
            found = true;
            console.log(word);
        }
    }
    if (!found) {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
    'is the best programming language'
);