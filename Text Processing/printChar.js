function printChar(word) {
    let splitWord = word.split("");
    for (let letter of splitWord) {
        console.log(letter);
    }
}
printChar('AWord');