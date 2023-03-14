function bombNumbers(arr, [bomb, power]) {

    while (arr.includes(bomb)) {
        let index = arr.indexOf(bomb); //3
        let elementsToRemove = power * 2 + 1; // 2*2+1 = 5
        let startIndex = index - power; // 3-2 = 1

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        arr.splice(startIndex, elementsToRemove);
    }
    console.log(arr.reduce((a, b) => a + b, 0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log("-------------");
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
console.log("-------------");
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);