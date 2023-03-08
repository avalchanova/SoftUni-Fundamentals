function charactersInLine(firstChar, secondChar) {
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let result = [];
    for (let i = start + 1; i < end; i++) {
        let currentChar = String.fromCharCode(i);
        result.push(currentChar);
    }
    console.log(result.join(' '));
}
charactersInLine('a', 'd');