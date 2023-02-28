function commonElements(firstArr, secondArr) {
    let arrLength = firstArr.length;

    for (let element of firstArr) {
        if (secondArr.includes(element)) {
            console.log(element);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);
